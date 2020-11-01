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
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  data() {
    return {
      defaultImgUrl: require("@/assets/img/tabbar/tb_0_0.pdf"),
      hilightImgUrl: require("@/assets/img/tabbar/tb_0_1.pdf")
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
