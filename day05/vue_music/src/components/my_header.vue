<template>
  <div class="my-header">
    <span class="img"><img src="/01.png" alt=""></span>
   <span class="chm">Chicken Music</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img1:'/01.png'
    }
  }
}
</script>


<style scoped lang="less">
@import url('../style/index.less');
  .my-header{
    display: flex;
    align-items: center;
    .w(375);
    .h(44);
    background: @black;
    color:@yellow;
    font-size: @fs-l;
    justify-content: center;
  
    .img{
        img{
        .w(30);
        .h(32);
        margin-top: 6px;
        margin-right: 9px
      }
    }
    
   
  }
</style>