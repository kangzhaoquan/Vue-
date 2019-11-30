#### 组件通信
兄弟：状态提升（公有父元素） 事件总线 eventbus
父子：props 传递数据
子父：porps 传递方法  自定义事件
1.确定数据的位置  父
2.发起者的位置    子

#### 生命周期
1.this
2.数据
3.dom
4.能干啥
5.不能干啥
创建
beforeCreate   可以请求数据
created        可以数据请求 可以修改数据
beforeMount    可以数据请求 可以修改数据
mounted        dom的初始化操作
beforeUpdate   数据修改的时候触发 dom 是修改之前 注意修改数据死循环
update         数据修改的时候触发 dom 是修改之后 注意修改数据死循环
beforeDestory  组件销毁卸载的时候触发  能获得don 全局事件监听 全局计时器 
destoryed      组件销毁卸载的时候触发  没有dom 全局事件监听 全局计时器 