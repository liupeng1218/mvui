<template>
  <div>
    <mv-header></mv-header>
    <mv-navigation></mv-navigation>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mvHeader from "./components/header.vue";
import mvNavigation from "./components/navigation.vue";
export default {
  name: "App",
  components: { mvHeader, mvNavigation },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#content {
  position: fixed;
  background-color: #f5f5f5;
  top: 40px;
  left: 80px;
  bottom: 0;
  right: 0;
  padding: 10px;
}
</style>