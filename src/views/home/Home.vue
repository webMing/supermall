<template>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车
    </template>
  </NavBar>
  <HomeSwiper :banners="banners" />
</template>

<script>
import { getMultiData } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
export default {
  data() {
    return {
      banners: []
      // dKeyWord:Object,
      // keyWords:Object,
      // recommend:Object
    };
  },
  created() {
    getMultiData()
      .then(result => {
        // 注意this;注意这里有一层data
        let res = result.data.data;
        this.banners = res.banner.list;

        // this.dKeyword = result.data.dKeyword;
        // this.keywords = result.data.keywords;
        // this.recommend = result.data.recommend;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    NavBar,
    HomeSwiper
  }
};
</script>

<style scoped>
.home-nav {
  background-color: green;
  color: white;
}
</style>
