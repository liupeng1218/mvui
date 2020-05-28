<template>
  <input type="text" :value="realValue" @blur="handleBlur" @input="handleInput" class="mv-input" />
</template>
<script>
import emitter from "@/mixins/emitter";

export default {
  name: "mvInput",
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 承接value，避免直接修改props
      realValue: this.value
    };
  },
  watch: {
    // 数据源修改后，同步承接value
    value(val) {
      this.realValue = val;
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.realValue = value;
      this.$emit("input", value);
      this.dispatch("mvFormItem", "on-form-change", value);
    },
    handleBlur(event) {
      this.dispatch("mvFormItem", "on-form-blur", this.realValue);
    }
  }
};
</script>

