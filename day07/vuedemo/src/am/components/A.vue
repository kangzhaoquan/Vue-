<template>
  <div>
    这里是组件A
    {{name}}
    <hr>{{num}}<hr>{{toggle}}<hr>
    {{testNum}}
    <hr>
    <button @click="toggles">改名：李磊</button>
    <!-- {{this.$store.getters.testNum}} -->
  </div>
</template>

<script>
// 辅助函数
import {mapState,mapGetters} from 'vuex'
export default {
  // 计算函数
  computed:{
    // name(){
    //   return this.$store.state.name
    // }
    ...mapState(['name','num','toggle']),
    ...mapGetters(['testNum'])
  },
  methods:{
    toggles(){
      // this.$store.commit('changeName',{name:'李磊'})
      this.$store.dispatch('changeNameNet',{name:'李磊'})
    }
  }
 
}
</script>


<style scoped>

</style>
