<template>
  <div>
    这里是组件C
    {{name}}
    <button @click="toggle">改名：才哥</button>
  </div>
</template>

<script>
import {mapMutations,mapActions,mapState} from 'vuex'
export default {
    computed:{
      ...mapState(['name'])
      // name(){
      //   return this.$store.state.name
      // }
    },
    methods:{
      ...mapMutations(['changeName','changeToggle']),
      ...mapActions(['changeNameNet']),
      toggle(){
        // this.$store.commit('changeName',{name:'才哥'})
        // this.$store.dispatch('changeNameNet',{name:'才哥'})
        // this.changeName({name:'才哥'})
        this.changeNameNet({name:'才哥'})

      }
    }
}
</script>


<style scoped>

</style>
