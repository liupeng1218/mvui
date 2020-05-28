<template>
  <div class="mv-checkboxGroup">
    <slot></slot>
  </div>
</template>

<script>
import assist from "@/utils/assist";
import emitter from "@/mixins/emitter";

export default {
  name: "mvCheckboxGroup",
  mixins: [emitter],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
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
      this.updateModel(true);
    }
  },
  methods: {
    updateModel(update) {
      this.childrens = assist.findComponentsDownward(this, "mvCheckbox");
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          // 复选框选项初始化
          child.model = value;
          // 选中状态初始化
          if (update) {
            child.currentValue = value.indexOf(child.label) > -1;
            child.isGroup = true;
          }
        });
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("on-change", data);
      this.dispatch("mvFormItem", "on-form-change", data);
    }
  },
  mounted() {
    this.updateModel(true);
  }
};
</script>
