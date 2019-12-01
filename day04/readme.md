#### 组件通信
兄弟 ： 状态提升（公有父元素） 事件总线 eventbus
父子 ：props 传递数据   
子父 ：porps  传递方法   自定义事件
1.确定数据的位置  父 
2.发起者的位置   子

#### 生命周期
1.this 
2.数据
3.dom
4.能干啥
5.不能干啥
创建
beforeCreate  可以数据请求 
createted   v    可以数据请求 可以修改数据
beforeMount    可以数据请求 可以修改数据
mounted    v     dom的初始化操作
beforeUpdate   数据修改的时候触发  dom 是修改之前 注意修改数据死循环
updated    v    数据修改的时候触发  dom 是修改之后 注意修改数据死循环
beforeDestory   组件销毁卸载的时候触发   能获得dom  擦屁股  全局事件监听 全局计时器
destoryed  v     组件销毁卸载的时候触发   没有dom    擦屁股  全局事件监听 全局计时器

#### vue 脚手架项目 目录
public 静态资源
src    源码目录
   main.js   vue项目的入口文件
   App.vue   单文件组件  一个xxx.vue文件就是一个组件
.xxxx  插件的配置文件
.gitignore git上传的忽略文件
dist   编译打包后文件所在目录
#### 指令
npm run serve  本地开发环境启动
npm run build  编译打包  打包后的文件为绝对路径 可以进行修改

### spa(单页面应用)  mpa（多页面应用）
spa   搜索引擎优化
优点：页面切换流畅 组件的切换 
     组件开发 组件复用可以提高开发效率
缺点：首屏加载过慢
     seo优化不好
<meta keyword='lol 王者 蔡徐坤 周杰伦'>

http://ustbhuangyi.com/music/#/recommend

#### 动态路由
is

#### 路由
what : 根据地址栏的改变控制组件的切换
原理 ： 1.监听地址栏的改变
        2.根据地址栏的变化匹配路由表渲染不同的组件
安装路由模块： npm install vue-router

#### 路由的基本使用
<router-link to='/home'></router-link> 控制地址栏改变
<router-view></router-view> 是一个容器 来渲染组件
a.配置路由表
    1.引入vue
    2.引入路由
    3.在vue中使用路由
    4.创建路由对象
    5.抛出路由
b.在实例里注册路由

#### 路由的重定向
匹配一个路径 跳到其他路径

{
    path:'/',
    redirect:'/home' //重定向
}

#### 路由的模式
mode:hash  #
    history  打包上线后刷新404

#### 动态路由
写 path 路径 将路径变成变量
在目标组件中 通过this.$route 获取参数

#### 声明式导航 和编程式导航
<a href=''>
<router-link> 声明式导航
this.$router.push  replace  go(num)  编程式导航
标签就是声明式  js代码就是编程式
push 将跳转的页面维护页面栈里  可以返回上一个页面
replace  替换页面  不会维护页面栈  直接返回到初始位置

#### 路由的跳转方式
路径 path 跳转
this.$router.push("/home")
this.$router.push({path:"/home"})
路由的名称跳转 路由的名称在路由表里通过name属性进行声明
this.$router.push({name:'路由的名字'})

#### 路由的传参
1.动态路由
2.query  
    this.$router.push({name:'my',query:{us:123,ps:456}})
3.params
    this.$router.push({name:'my',params:{us:123,ps:456}})
path 路径跳转和params 不能通用

#### 嵌套路由
在router-view 嵌套router-view 
在路由表里配置childern项
#### 开发者工具
1. 科学上网 magvpn 每天1小时 
2. 谷歌商店 下载 vue。js devtools
3. vue 图标  基于 vue 下 xxx。map文件


