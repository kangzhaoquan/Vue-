<template>
    <div id="cai">
        这里是APP组件12
       <hr>
       <!-- 控制地址栏改变 -->
       <!-- 声明式导航 -->
       <router-link to='/home'>首页</router-link>
       <router-link to='/list'>列表</router-link>
        <!-- 是一个容器 来渲染组件 -->
       <router-view ></router-view>
       <router-view name='a'></router-view>
       <router-view name='b'></router-view>
       <hr>
       <button @click='jump("/home")'>首页</button>
       <button @click='jump("/list")'>列表</button>
       <button @click='jump("/songer")'>歌手</button>
       <button @click='jump("/my")'>我的</button>
    </div>
</template>

<script>

export default {
    methods:{
        jump(path){
            console.log(this.$router)
            // 编程式导航
            this.$router.push(path)
            // this.$router.replace(path)
            //this.$router.push({path:'/name'})  //this.$router('/name')
            // this.$router.push({name:'my'})
            // this.$router.push({name:'my',query:{us:123,ps:456}})
            // this.$router.push({name:'my',params:{us:123,ps:456}})
            // this.$router.push({path:'/my',query:{us:123,ps:456}})
            
           //this.$router.push({path:'/rank',params:{us:123,ps:123}})
           // path params 不能一起用
           // 参数在 route 里



        }
    }
}
</script>

<style>
   
</style>