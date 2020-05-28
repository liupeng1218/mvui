<template>
  <div class="mv-radioGroup">
    <slot></slot>
  </div>
</template>

<script>
import assist from "@/utils/assist";
import emitter from "@/mixins/emitter";

export default {
  name: "mvRadioGroup",
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  watch: {
    value() {
      if (this.currentValue !== this.value) {
        this.currentValue = this.value;
        this.$nextTick(() => {
          this.updateModel(true);
        });
      }
    }
  },
  methods: {
    updateModel() {
      this.childrens = assist.findComponentsDownward(this, "mvRadio");
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          // 复选框选项初始化
          child.model = value;
        });
      }
    },
    change(data) {
      this.$emit("input", data);
      this.$emit("on-change", data);
      this.dispatch("mvFormItem", "on-form-change", data);
    }
  },
  mounted() {
    this.updateModel();
  }
};
</script>
