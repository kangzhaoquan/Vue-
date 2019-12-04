<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in data[0]" :key="index">
          <img :src="item.picUrl" alt="">
      </div>
      <!-- 如果需要分页器 -->
      
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import { getBanner } from "../api";
import Swiper from "swiper";
export default {
  props: {
    data: {
      type: Array,
      default: [4, 5, 6]
    }
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination : '.swiper-pagination'
      });
    }
    
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.initBanner();
      })
    }
  }
}
</script>

<style lang="less">
@import url("../../node_modules/swiper/dist/css/swiper.css");
.swiper-pagination-bullet-active{
  width: 20px;
  border-radius: 4px;
  background: rgba(255,255,255,.6)
}
img{
  width: 100%;
  height: 100%
}
</style>