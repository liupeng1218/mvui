<template>
  <nav>
    <div v-for="route in routes" :key="route.path">
      <router-link :to="route.path">{{route.name}}</router-link>
    </div>
  </nav>
</template>

<script>
import { routes } from "../router.js";

const navRoutes = routes.filter(route => {
  return !route.redirect;
});
export default {
  name: "mvNavvigation",
  data() {
    return {
      routes: navRoutes
    };
  }
};
</script>
<style lang="scss">
nav {
  position: fixed;
  background-color: #9e9e9e;
  top: 40px;
  bottom: 0;
  width: 80px;
  text-align: center;
}
</style>

