<template>
    <div>
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-table></todo-table>
    </div>
</template>

<script>
import todoInput from './todo-input'
import todoList from './todo-list'
import todoTable from './table'
export default {
    components:{todoInput,todoList,todoTable}
}
</script>

<style lang="stylus">

</style>