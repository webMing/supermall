<template>
  <TabBar>
    <TabBarItem
      :normalImgUrl="homeImgUrl"
      :hilightImgUrl="homeHiImgUrl"
      titleHiLightColor="green"
      path="/home"
      title="首页"
    ></TabBarItem>
    <TabBarItem
      :normalImgUrl="categoryImgUrl"
      :hilightImgUrl="categoryHiImgUrl"
      path="/category"
      titleHiLightColor="green"
      title="分类"
    ></TabBarItem>
    <TabBarItem
      :normalImgUrl="cartImgUrl"
      :hilightImgUrl="cartHiImgUrl"
      path="/cart"
      titleHiLightColor="green"
      title="购物车"
    ></TabBarItem>
    <TabBarItem
      :normalImgUrl="meImgUrl"
      :hilightImgUrl="meHiImgUrl"
      path="/me"
      titleHiLightColor="green"
      title="我"
    ></TabBarItem>

  </TabBar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  data() {
    return {
      homeImgUrl: require("@/assets/img/tabbar/home.png"),
      homeHiImgUrl: require("@/assets/img/tabbar/home_hi.png"),
      categoryImgUrl: require("@/assets/img/tabbar/category.png"),
      categoryHiImgUrl: require("@/assets/img/tabbar/category_hi.png"),
      cartImgUrl: require("@/assets/img/tabbar/cart.png"),
      cartHiImgUrl: require("@/assets/img/tabbar/cart_hi.png"),
      meImgUrl: require("@/assets/img/tabbar/me.png"),
      meHiImgUrl: require("@/assets/img/tabbar/me_hi.png"),
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
