<template>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
// import {ffnw} from "network/ffnw.js"
export default {
  created(){
    // ffnw.get({
    //   url:"home",
    // })    
  },
  components: {
    NavBar
  }
};

</script>

<style scoped>
.home-nav {
  background-color: green;
  color:white
}
</style>
