<template>
    <div class="sing-box">
        <div id="singer">
            <!-- 左侧歌手列表 -->
            <ul class="sing">
                <li v-for='(item,index) in singers'
                    :key='index'
                    ref='test'
 
                >
                    <div class="title"><p>{{item.title}}</p></div>
                    <!-- 循环歌手列表 -->
                    <ol>
                        <li v-for='(sItem,sIndex) in item.list'
                            :key='sIndex'
                            @click='jumpDetail(sItem.Fsinger_mid)'
                        >
                            <img :src="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+sItem.Fsinger_mid+'.jpg?max_age=2592000'" alt="">
                            <span>{{sItem.Fsinger_name}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
            <!-- 索引列表 -->
            <div class="listbox">
                <ul class="slider"
                    @touchstart='touchStart'
                    @touchmove.stop='touchMove'
                    @touchend='touchEnd'
                >
                    <li v-for='(item,index) in sliderData'
                        :key='index'
                        :class='selIndex===item?"sel":""'
                        @click='sliderClick(item)'
                    >
                        {{item}}
                    </li>
                </ul>
            </div>

        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import {getSingerList} from 'api/index.js'
import {initSingerData} from './singer.js'
import Bs from 'better-scroll'
export default {
    data(){
        return{
            singers:[],
            selIndex:'hot'
        }
    },
    computed:{
        sliderData(){
            // 根据歌手列表信息产生侧边栏数据
            let result =this.singers.map((item,index)=>{
                return item.title
            })
            return result
        }
    },
    methods:{
        jumpDetail(id){
            this.$router.push({path:'/singer/detail',query:{id}})
        },
        // 滑动事件
        touchStart(){
            console.log('按下')
        },
        touchMove(e){
            console.log('移动')
            let  distanceY=e.touches[0].pageY-170
            let  num=parseInt(distanceY/18)
            console.log('移动',distanceY,num)
            this.moveElement(num)
        },
        touchEnd(){
            console.log('抬起')

        },
        initBs(){
            this.bs=new Bs('#singer',{
                probeType:3,
                click:true
            })
            // better-scroll 自带的绑定事件的方法
            this.bs.on('scroll',(pos)=>{
                let y=Math.abs(pos.y) // 向上滚动的距离
                // console.log(y)
                let index=0
                for(let i=0; i<this.tops.length; i++){
                    if(y>=this.tops[i]&&y<this.tops[i+1]){
                        index=i
                    }
                }
                // selIndex是右侧侧边栏的字母
                // sliderData 根据歌手列表信息产生侧边栏数据
                this.selIndex=this.sliderData[index]
            })
        },
        // 获取滚动列表高度的数组
        getTops(){
            this.tops = this.$refs.test.map((item)=>{
                return item.offsetTop
            })
            console.log(this.tops)
        },
        // 右侧点击事件
        sliderClick(item){
            // console.log(item)
            // 高亮
            // 滚动元素
            let index=this.sliderData.indexOf(item)
            this.moveElement(index)
            this.selIndex=item

        },
        moveElement(index){
            this.bs.scrollToElement(this.$refs.test[index])
        }
    },
    created(){
        getSingerList().then((data)=>{
            // console.log(data)
           let result = initSingerData(data.data.list)
           this.singers=result
            // console.log(this.sliderData)
            this.$nextTick(()=>{
                this.getTops()
            })
        })
    },
    mounted(){
        this.initBs()
    }
}
</script>

<style  scoped lang='less' >
@import url('~style/index.less');
    #singer{
        .fixed(88,0,0,0,@black);
        overflow: hidden;
        .sing{
            li{
                padding-bottom:30px; 
            }
            .title{
                .w(375);
                .h(30);
                background:#333;
                .l_h(30);
                font-size: 14px;
                color: @black_o5;
                p{
                
                    padding-left: 20px
                }
            } 
            ol{
                li{
                    display: flex;
                    align-items: center;
                    .w(345);
                    .h(50);
                    padding: 20px 0 0 30px;
                    img{
                        .w(50);
                        .h(50);
                        border-radius: 50%;
                    }
                    span{
                        font-size: @fs-s;
                        color:@black_o5;
                        margin-left: 20px;
                        
                    }
                }
            }
        }
             // 侧边栏
        .listbox{
            background: rgba(0,0,0,0.3);
            .w(20);
                border-radius: 10px;
                position: absolute;
                top:60px;
                right:0;
                padding: 20px 0;
                .t_c();
                // z-index: 2;
            .slider{ 
                overflow: hidden;
                font-size: @fs-xs;
                color: @black_o5;
                li{
                // .w(20);
                .h(18);
                .l_h(18);
                }
                .sel{
                color:@yellow;
                }
            }
        }
    }
</style>