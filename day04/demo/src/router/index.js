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

// 引入组件
import Home from '../components/home.vue'
import List from '../components/list.vue'
import MY from '../components/My.vue'
import Songer from '../components/songer.vue'
import Login from '../components/login.vue'
import Info from '../components/info.vue'

let router = new Router({
    mode:'hash',
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            name:'my',
            path:'/my',
            component:MY,
            // 表示子路由
            children:[
                {
                    path:'login',
                    component:Login
                },
                {
                    path:'info',
                    component:Info
                }
            ]
        },
        {
            path:'/songer',
            components:{
                default:Songer,
                a:Login,
                b:Info
            }
        },
        {
            path:'/list',   // 动态路由 将路径变成变量
            component:List
        },
        
        // {
        //     path:'/',
        //     redirect:'/home' //重定向
        // }
    ]
})

export default router