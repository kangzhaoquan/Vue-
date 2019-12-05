<template>
    <div>
        <input type="text" v-model="msg">
        <button @click="addlist">add</button>
    </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    
    data(){
        return {
            msg:''
        }
    },
    methods:{
        ...mapMutations(['addList']),
        ...mapActions(['addListNet']),
        addlist(){
            // this.addList({msg:this.msg})
            this.addListNet({msg:this.msg})
        }
    }
}
</script>

<style lang="stylus">

</style>