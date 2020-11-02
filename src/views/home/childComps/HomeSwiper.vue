<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="img" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  props: {
    banners: {
      type: Array,
      default: () => {
        return [];
      },
      required: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped></style>
