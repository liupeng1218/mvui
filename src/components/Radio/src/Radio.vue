<template>
  <label>
    <span>
      <input
        v-if="isGroup"
        type="radio"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        class="mv-Radio"
      />
      <input
        v-else
        type="radio"
        :disabled="disabled"
        :value="trueValue"
        :checked="currentValue"
        @change="handleChange"
        class="mv-radio"
      />
    </span>
    <span>
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
import assist from "@/utils/assist";
import emitter from "@/mixins/emitter";

export default {
  name: "mvRadio",
  mixins: [emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true
    },
    label: {
      type: [Boolean, String, Number]
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data() {
    return {
      parent: null,
      isGroup: false,
      model: "",
      // 单独使用时 承接value，避免直接修改props
      currentValue: this.value
    };
  },
  watch: {
    // 单独使用时 数据源修改后，同步承接value
    value(val) {
      this.updateModel(val);
    }
  },
  methods: {
    updateModel(val) {
      this.currentValue = val === this.trueValue;
    },
    handleChange(event) {
      if (this.disabled) return;
      const checked = event.target.checked;
      this.currentValue = checked;
      let value = checked;
      if (checked && this.trueValue) value = this.trueValue;

      if (this.isGroup) {
        // 同步 model
        this.parent.change(this.model);
      } else {
        this.$emit("input", value);
        this.$emit("on-change", value);
        this.dispatch("mvFormItem", "on-form-change", value);
      }
    }
  },
  mounted() {
    this.parent = assist.findComponentUpward(this, "mvRadioGroup");

    if (this.parent) this.isGroup = true;
    if (this.isGroup) {
      this.parent.updateModel();
    } else {
      this.updateModel(this.value);
    }
  }
};
</script>

