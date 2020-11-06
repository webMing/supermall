<template>
  <div class="tab-bar-item">
    <div @click.stop="clickAction">
      <img :src="displayImgUrl" alt="" />
      <div :style="{ color: titleColor }">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "title",
      required: true
    },
    titleNomalColor: {
      type: String,
      default: "#000"
    },
    titleHiLightColor: {
      type: String,
      default: "#f19c0a"
    },
    normalImgUrl: {
      type: String,
      required: true
    },
    hilightImgUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    clickAction() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    titleColor() {
      if (this.isSelected) {
        return this.titleHiLightColor;
      }
      return this.titleNomalColor;
    },
    displayImgUrl() {
      if (this.isSelected) {
        return this.hilightImgUrl;
      }
      return this.normalImgUrl;
    },
    isSelected() {
      return this.$route.path == this.path;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
/* img 是行内块元素 */
.tab-bar-item img {
  height: 25px;
  width: 25px;
  margin-bottom: -4px;
}

.tab-bar-item div {
  /* margin-top: 0px; */
  /* width: 100px; */
  margin: auto;
}
</style>
