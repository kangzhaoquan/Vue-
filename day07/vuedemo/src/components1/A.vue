<template>
  <div>
    这里是组件A
    <button @click="toggle">toggleA</button>
  </div>
</template>

<script>
export default {
  methods:{
    toggle(){
      this.$store.commit("changeToggle",{name:'才哥'})
    }
  }
}
</script>


<style scoped>

</style>
