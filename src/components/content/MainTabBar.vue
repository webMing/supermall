<template>
  <TabBar>
    <TabBarItem
      :normalImgUrl="defaultImgUrl"
      :hilightImgUrl="hilightImgUrl"
      titleHiLightColor="red"
      path="/me"
      title="我的"
    ></TabBarItem>
    <TabBarItem
      :normalImgUrl="defaultImgUrl"
      :hilightImgUrl="hilightImgUrl"
      path="/category"
      titleHiLightColor="red"
      title="分类"
    ></TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  data() {
    return {
      defaultImgUrl: require("@/assets/img/tabbar/tabbar_me@2x.png"),
      hilightImgUrl: require("@/assets/img/tabbar/tabbar_me_highLight@2x.png")
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {}
};
</script>

<style scoped></style>
