<template>
<!-- 注意这些属性都需要进行动态绑定 -->
  <div class="home-recommend">
      <div v-for="item in recommend" :key="item" class="recommend-item">
         <a :href="item.link">
                   <img :src="item.image" alt="" />
                   <div>{{item.title}}</div>
        </a>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.home-recommend {
    display: flex;
    text-align: center;
    padding :10px 0px 15px;
    border-bottom: 10px solid#eee;
}
.recommend-item {
    flex:1;
}
.recommend-item img {
    width: 80px;

}


</style>
