<template>
  <div>
    这里是组件C
    <button @click="toggle">toggleC</button>
  </div>
</template>

<script>
export default {
    methods:{
      toggle(){
        this.$store.commit('changeToggle',{us:123,ps:456})
      }
    }
}
</script>


<style scoped>

</style>
