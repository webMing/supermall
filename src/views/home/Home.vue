<template>
  <NavBar class="home-nav">
    <template v-slot:center>
      购物车
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getMultiData } from "network/home.js";
export default {
  created() {
    getMultiData()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.home-nav {
  background-color: green;
  color: white;
}
</style>
