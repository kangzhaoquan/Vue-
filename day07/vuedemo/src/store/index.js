import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        list:[
            {msg:'迪迦',state:false},
            {msg:'泰罗',state:true},
            {msg:'戴拿',state:false},
            {msg:'赛罗',state:true},
            {msg:'盖亚',state:false},
            {msg:'诺亚',state:true},
        ],
        index:0 // 0表示全部， 1已完成  -1未完成
    },
    mutations:{
        changeIndex(state,index){
            state.index=index
        },
        addList(state,params){
            let {msg} = params
            state.list.push({msg:msg,state:false})
        },
        updateList(state,index){
            state.list[index].state=true
        },
        delList(state,index){
            state.list.splice(index,1)
        }
    },
    actions:{
        addListNet(context,params){
            let {commit} = context
            setTimeout(()=>{
                commit('addList',params)
            },1000)
        }
    },
    getters:{
        getterList(state){
            // 根据index和list来确定getters返回的数据

            let index=state.index
            let result=state.list.filter((item)=>{
                switch (index) {
                    case 0:
                        return true
                        break;
                    case 1:
                        return item.state==true
                        break;
                    case -1:
                        return item.state==false
                        break;
                
                    default:
                        break;
                }
            })
            return result
        }
    }
})

export default store