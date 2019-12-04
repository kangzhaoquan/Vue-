<template>
  <div class="my-table">
      <ul>
      <router-link to='/recommend' tag='li' active-class='sel'><span>推荐</span></router-link>
      <router-link to='/singer' tag='li' active-class='sel'><span>歌手</span></router-link>
      <router-link to='/rank' tag='li' active-class='sel'><span>排行</span></router-link>
      <router-link to='/search' tag='li' active-class='sel'><span>搜索</span></router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>


 <style lang="less">
@import url('../style/index.less');
    .my-table{
        background: @black;
        .w(375);
        .h(44);
        font-size: @fs-s;
        color:@black_o5;
        .t_c();
        .l_h(44);
        ul{
            display: flex;
            li{
                flex: 1
            }
        }
        .sel{
            color:@yellow;
            span{
            border-bottom: 2px solid @yellow;
            padding-bottom: 2px
            }
        }

    }
</style>