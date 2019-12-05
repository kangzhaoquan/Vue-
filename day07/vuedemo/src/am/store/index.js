

import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  // 全局状态 全局变量
  state:{
    toggle:true,
    name:'韩梅梅',
    num:5
  },
  getters:{
    testNum(state){
      return ((state.num*6+3)*2)
    }
  },
  mutations:{
    // 本质是一个对象 想修改state里的值必须通过mutation里的方法
    changeToggle(state,params){
      console.log('触发mutation',params)
      state.toggle=!state.toggle
    },
    changeName(state,params){
      state.name=params.name
    }
  },
  actions:{
    // 解决异步请求的代码
    changeNameNet(context,params){
      console.log('触发action',arguments)
      // console.log(context)
      // 上下文的意思
      let {commit} =context
      setTimeout(()=>{
        commit('changeName',params)
      },1000)
    }
  }

})


export default store

