<template>
  <div class>
    <div>
      <input type="checkbox" id="john" value="John" v-model="childArray" />
      <label for="john">John</label>
    </div>
        {{childArray}}

  </div>
</template>

<script>
export default {
  name: "Btwo",
  data() {
    return {
      childArray: []
    };
  }
};
</script>

<!-- Add 
 attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>