<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar";
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
