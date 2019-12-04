<template>
    <!-- <div class="sing-box"> -->
        <div id="singer">
            <!-- 左侧歌手列表 -->
            <ul>
                <li v-for='(item,index) in singers'
                    :key='index'
                >
                    <div class="title"><p>{{item.title}}</p></div>
                    <!-- 循环歌手列表 -->
                    <ol>
                        <li v-for='(sItem,sIndex) in item.list'
                            :key='sIndex'
                        >
                            <img :src="'https://y.gtimg.cn/music/photo_new/T001R300x300M000'+sItem.Fsinger_mid+'.jpg?max_age=2592000'" alt="">
                            <span>{{sItem.Fsinger_name}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    <!-- </div> -->
</template>

<script>
import {getSingerList} from 'api/index.js'
import {initSingerData} from './singer.js'
import Bs from 'better-scroll'
export default {
    data(){
        return{
            singers:{}
        }
    },
    methods:{
        initBs(){
            this.bs=new Bs('#singer')
        },
        // 处理歌手数据
    },
    created(){
        getSingerList().then((data)=>{
            // console.log(data)
           let result = initSingerData(data.data.list)
           this.singers=result

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
        ul{
            li{
                padding-bottom:30px; 
            }
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
</style>