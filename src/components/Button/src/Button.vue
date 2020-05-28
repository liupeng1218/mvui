<template>
  <button type="button" class="mv-button" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "mvButton",
  methods: {
    handleClick() {
      this.$emit("on-click");
    }
  }
};
</script>

