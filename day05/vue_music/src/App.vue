<template>
  <div id="app">
    <my-header></my-header>
    <my-table></my-table>
   
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/my_header.vue'
import myTable from './components/my_table.vue'
export default {
  components:{myHeader,myTable}
}
</script>

<style lang="less">

</style>
