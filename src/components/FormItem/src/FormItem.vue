<template>
  <div class="mv-form__item">
    <label v-if="label" :class="{'mv-form__item__label--required':isRequired}">{{label}}</label>
    <div>
      <slot></slot>
      <div class="mv-form__item__message" v-if="validateState==='errors'">{{validateMessage}}</div>
    </div>
  </div>
</template>
<script>
import AsyncValidator from "async-validator";
import emitter from "@/mixins/emitter";

export default {
  name: "mvFormItem",
  inject: ["form"],
  mixins: [emitter],

  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      initValue: null,
      isRequired: false,
      validateState: "",
      validateMessage: ""
    };
  },
  computed: {
    fieldValue() {
      return this.form.model[this.prop];
    }
  },
  methods: {
    // 获取规则
    getRules() {
      const formRules = this.form.rules;
      const rules = formRules ? formRules[this.prop] || [] : [];
      return rules;
    },
    // 过滤规则，只支持bule/change
    getFilterRules(trigger) {
      return this.getRules().filter(item => {
        return !item.trigger || item.trigger.indexOf(trigger) !== -1;
      });
    },
    validate(trigger, callback) {
      const rules = this.getFilterRules(trigger);
      if (!rules || rules.length === 0) return true;
      this.validateState = "validating";
      let descriptor = {};
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);

      let model = {};
      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? "success" : "errors";
        this.validateMessage = errors ? errors[0].message : "";
        if (callback) callback(this.validateMessage);
      });
    },
    resetField() {
      this.validateState = "";
      this.validateMessage = "";
      this.form.model[this.prop] = this.initValue;
    },
    onFieldChange() {
      this.validate("change");
    },
    onFieldBlur() {
      this.validate("blur");
    },
    setRules() {
      const rules = this.getRules();
      this.isRequired = rules.some(rule => rule.required);
      this.$on("on-form-change", this.onFieldChange);
      this.$on("on-form-blur", this.onFieldBlur);
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch("mvForm", "on-add-form-item", this);
      this.initValue = this.fieldValue;
      this.setRules();
    }
  },
  beforeDestroy() {
    this.dispatch("mvForm", "on-remove-form-item", this);
  }
};
</script>

