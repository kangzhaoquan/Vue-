<template>
    <div>
       {{item.msg}}
      
       <span v-if='item.state'>已完成</span>
        <button v-else @click='update'>完成</button>
       <button @click='del'>删除</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props:{
        item:{
            type:Object,
            default:{msg:'暂无数据',state:false}
        },
        index:{
            type:Number,
            default:0
        }
    },
    methods:{
        ...mapMutations(['delList','updateList']),
        update(){
            this.updateList(this.index)
        },
        del(){
            this.delList(this.index)
        }
    }
}
</script>

<style lang="stylus">

</style>