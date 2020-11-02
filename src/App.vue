<template>
  <div id="app">
    <keep-alive>
         <router-view />
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue";
export default {
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
/* @import "assets/css/normalize.css"; */
</style>
