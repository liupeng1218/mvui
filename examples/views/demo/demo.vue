<template>
  <div id="mv-demo">
    <mv-button @on-click="handleClick">走你</mv-button>
  </div>
</template>

<script>
import Aone from "./Aone.vue";
export default {
  name: "exDemo",
  components: { Aone },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$msg.info({
        content: "zouni",
        duration: 2000,
      });
    }
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
</style>