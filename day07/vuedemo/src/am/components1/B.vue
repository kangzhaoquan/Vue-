<template>
  <div class="demo" v-if='this.$store.state.toggle'>
    这里是组件B
  </div>
</template>

<script>
export default {
  // data(){
  //   return {
  //     state:true
  //   }
  // },
  created(){
    console.log(this)
  }
}
</script>


<style scoped>
  .demo{
    width: 100px;
    height: 100px;
    background: red
  }
</style>
