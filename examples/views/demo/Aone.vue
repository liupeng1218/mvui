<template>
  <div class>
    <bone></bone>
    <btwo></btwo>
    <div>valueArray：{{value}}</div>
  </div>
</template>

<script>
import Bone from "./Bone.vue";
import Btwo from "./Btwo.vue";

export default {
  name: "Aone",
  components: {
    Bone,
    Btwo
  },
  props: {
    value: {
      type: Array
    }
  },
  mounted() {
    this.$children.forEach(child => {
      child.childArray = this.value;
    });
  }
};
</script>

<!-- Add 
 attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>