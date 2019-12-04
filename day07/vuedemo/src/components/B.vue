<template>
  <div class="demo" v-if='this.$store.state.toggle'>
    这里是组件B
    {{name}}
  </div>
</template>

<script>
export default {
  computed:{
    name(){
      return this.$store.state.name
    }
  },
  created(){
    console.log(this)
  }
}
</script>


<style scoped>
  /* .demo{
    width: 100px;
    height: 100px;
    background: red
  } */
</style>
