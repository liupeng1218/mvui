<template>
  <div class>
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="childArray" />
      <label for="jack">Jack</label>
    </div>
    {{childArray}}
  </div>
</template>

<script>
export default {
  name: "Bone",
  data() {
    return {
      childArray:[]
    }
  },
};
</script>

<!-- Add 
 attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>