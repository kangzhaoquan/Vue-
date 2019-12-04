/*
 1.引入vue 
2.引入路由
3.在vue 中使用路由
4.创建路由对象
5.抛出路由
*/

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Recommend from 'pages/recommend.vue'
import Rank from 'pages/rank.vue'
import Search from 'pages/search.vue'
import Singer from 'pages/singer/singer.vue'

let router = new Router({
    routes:[
        {
            path:'/recommend',
            component:Recommend
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/singer',
            component:Singer
        },
        {
            path:'/',
            redirect:'/recommend'
        }

    ]
})

export default router