<template>
  <label>
    <span>
      <input
        v-if="isGroup"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        class="mv-checkbox"
      />
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="handleChange"
        class="mv-checkbox"
      />
    </span>

    <span>
      <slot>{{label?label:''}}</slot>
    </span>
  </label>
</template>
<script>
import assist from "@/utils/assist";
import emitter from "@/mixins/emitter";

export default {
  name: "mvCheckbox",
  mixins: [emitter],
  props: {
    label: {
      type: [Boolean, String, Number]
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  data() {
    return {
      parent: null,
      isGroup: false,
      model: [],
      // 单独使用时 承接value，避免直接修改props
      currentValue: this.value
    };
  },
  watch: {
    // 单独使用时 数据源修改后，同步承接value
    value(val) {
      this.currentValue = val;
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel(val);
      } else {
        throw "请输入符合条件的 checkbox 值";
      }
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
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);

      if (this.isGroup) {
        // 同步 model
        this.parent.change(this.model);
      } else {
        this.$emit("on-change", value);
        this.dispatch("mvFormItem", "on-form-change", value);
      }
    }
  },
  mounted() {
    this.parent = assist.findComponentUpward(this, "mvCheckboxGroup");
    if (this.parent) this.isGroup = true;
    if (this.isGroup) {
      this.parent.updateModel(true);
    } else {
      this.updateModel(this.value);
    }
  }
};
</script>

