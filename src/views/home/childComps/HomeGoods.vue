<template>
  <HomeTabControl :titles="tabControlTitles" hilightColor="#800080" class="tab-control"/>
    <!-- <keep-alive>
      <component :is="currentTabComponent"> </component>
    </keep-alive> -->

</template>
<script>
import { getHomeGoods } from "network/home";
import HomeTabControl from "components/common/tabControl/TabControl";
export default {
    data(){
        return {
            tabControlTitles: ["流行", "新款", "精选"]
        }
    },
    components:{
        HomeTabControl,
    },
    created(){
       getHomeGoods("new",1).then((result) => {
           console.log(result);
       }).catch((err) => {
           console.log(err);
       });
    }
}
</script>

<style>
.tab-control {
  position: sticky;
  top: 44px;
}
</style>