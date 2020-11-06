<template>
  <div class="home">
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车
    </template>
  </NavBar>
  <HomeSwiper :banners="banners" />
  <HomeRecommend :recommend="recommend" class="home-recommend"/>
  <HomeFeture/>

  <HomeTabControl :titles="tabControlTitles"/>

  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>
  </div>
</template>

<script>
import { getMultiData } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeture from "./childComps/HomeFeature";
import HomeTabControl from "components/common/tabControl/TabControl"

export default {
  data() {
    return {
      banners: [],
      // dKeyWord:Object,
      // keyWords:Object,
      recommend: [],
      tabControlTitles:["分类","我的","制作"]
    };
  },
  created() {
    getMultiData()
      .then(result => {
        // 注意this;注意这里有一层data
        let res = result.data.data;
        this.banners = res.banner.list;
        this.recommend = res.recommend.list;

        // this.dKeyword = result.data.dKeyword;
        // this.keywords = result.data.keywords;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeture,
    HomeTabControl,
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  z-index: 9;
  
  background-color: green;
  color: white;
}
.home-recommend {
  width: 100%;
}
</style>
