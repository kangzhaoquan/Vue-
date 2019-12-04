<template>
  <div id="app">
    <component-a></component-a>
    <component-b></component-b>
    <component-c></component-c>
  </div>
</template>

<script>
import componentA from './components/A.vue'
import componentB from './components/B.vue'
import componentC from './components/C.vue'
export default {
  components:{
    componentA,componentB,componentC
  }
}
</script>

<style>

</style>
