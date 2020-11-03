<template>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车
    </template>
  </NavBar>
  <HomeSwiper :banners="banners" />
  <HomeRecommend :recommend="recommend" class="home-recommend"/>
</template>

<script>
import { getMultiData } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
export default {
  data() {
    return {
      banners: [],
      // dKeyWord:Object,
      // keyWords:Object,
      recommend: []
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
    HomeRecommend
  }
};
</script>

<style scoped>
.home-nav {
  background-color: green;
  color: white;
}
.home-recommend {
  width: 100%;
}
</style>
