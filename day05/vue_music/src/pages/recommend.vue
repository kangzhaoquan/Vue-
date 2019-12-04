<template>
  <div id="recommend">
    <div class="view-box">
      <div class="content">
        <div class="lun">
          <Banner :data='banners'></Banner>
        </div>
        <h1>热门歌单推荐</h1>
        <ul>
          <li v-for="(item,index) in list" :key="index">
              <div class="left">
                  <img :src="item.imgurl" alt="">
              </div>
              <div class="right">
                  <p>{{item.creator.name}}</p>
                  <span>{{item.dissname}}</span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bs from "better-scroll";
import { getRecommentList,getBanner } from "../api";
import Banner from "../components/banner";
export default {
  components: { Banner },
  data() {
    return {
      list: [],
      banners:[]
    };
  },
  methods: {
    initBs() {
      new Bs(".view-box");
    }
  },
  created() {
    getBanner().then((data)=>{
      this.banners = [data.data.slider];
      // console.log(this.banners);
    })
    getRecommentList().then(data => {
        // console.log(data)
      this.list = data.data.list;
      // console.log(this.list);
    });
  },
  mounted() {
    this.initBs();
  }
};
</script>

<style lang='less' scoped>
@import url("~style/index.less");

#recommend {
  .fixed(88, 0, 0, 0, blue);
  .view-box {
    width: 100%;
    height: 100%;
    background: @black;
    overflow: hidden;
    .content {

      .w(375);
      // .h(1000);
      background: @black;
      .lun {
        .w(375);
        .h(150);
        // background:blue;
      }
      h1{
          .w(375);
          .h(65);
          font-size: @fs-s;
          .t_c();
          .l_h(65);
          color:@yellow;
      }
      ul{
        overflow: hidden;
        li{
          list-style: none;
         float: left;

          .w(375);
          .h(83);
          .left{
              .w(60);
              .h(60);
              background: @black;
              float: left;
              margin-left: 20px;
              margin-right: 20px
          }
          .right{
              margin-top: 5px;
              float: left;
              .w(255);
              .h(50);
              background: @black;
              p{
                  font-size:@fs-s;
                  .h(20);
                  .w(255);
                  margin-bottom: 10px;
                  color: #ffffff;
              };
              span{
                  display: block;
                  font-size:@fs-s;
                  .w(255);
                  color:@black_o5
              }
          }
      }
      }
    }
  }
}
</style>