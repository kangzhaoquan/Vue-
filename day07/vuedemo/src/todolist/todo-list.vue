<template>
    <div>
       <ul>
           <li v-for='(item,index) in getterList'
                :key="index"
           >
            <todo-item :item=item :index=index></todo-item>
           </li>
       </ul>
    </div>
</template>

<script>
import todoItem from './todo-item'
import {mapState,mapGetters} from 'vuex'
export default {
    components:{todoItem},
    computed:{
        ...mapState(['list']),
        ...mapGetters(['getterList'])
    }
}
</script>

<style lang="stylus">

</style>