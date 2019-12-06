<template>
    <div class='detail'>
        <div class="tb"
            @click='back'
        >
            <img src="../../public/fanhui.png" alt="">
        </div>
        <div class="bg-img" :style="'background-image:'+'url('+imgList+')'">
        </div>
        
        <div class="filter">
        </div>
        <div class="title">
            <p>
                {{name}}
            </p>
        </div>
        <div class="song-box">
            <div id="songList">
                <ul>
                    <li v-for='(item,index) in list'
                        :key='index'
                        @click='goplay(item.songmid)'
                    >
                       <div class="centext">
                           <p class="songName">{{item.songname}}</p>
                       <p class="singerName">
                           <span v-for='(singerName,nIndex) in item.singer'
                            :key='nIndex'
                           >{{singerName.name}}.</span>
                           <span>{{item.albumname}}</span>
                       </p>
                       </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bs from "better-scroll";
import {getAvatorUrl,songData} from '../utils/song'
import {getSongList,getMusicUrl} from 'api/index'
export default {
    data(){
        return {
            imgList:'',
            name:'',
            list:[]
        }
    },
    created(){
        let mid=this.$route.query.id
        console.log(mid)
        this.getSongData(mid)
    },
    methods:{
        // 进入播放页面 获取音乐地址
        goplay(songmid){
            console.log(songmid)
            getMusicUrl(songmid).then((res)=>{
                console.log(res)
            })
        },
        initBs() {
            new Bs(".song-box",{
                click:true
            });
        },
        back(){
            this.$router.go(-1)
        },
        getSongData(mid){
            getSongList(mid).then((res)=>{
                console.log(res)
                // 歌手名   歌手头像  歌曲的信息(歌名  歌曲的地址  专辑名 专辑的图片地址)
                this.name=res.data.singer_name
                this.imgList=getAvatorUrl(mid)
                // console.log(this.name)
                this.list=songData(res.data.list)
                console.log( this.list)
            })
        }

    },
    mounted() {
    this.initBs();
  }
}
</script>

<style  lang="less" >
@import url('~style/index.less');
    .detail{
        .fixed(0,0,0,0,red);
        .tb{
  
            .w(42);
            .h(42);
            margin-left:10px; 
            position: absolute;
            z-index: 10;
            img{

                .w(26);
                .h(26);
                margin: 10px;
            }
        }
        .bg-img{
            .w(375);
            .h(262.5);
            background: @black;
            position: relative;
            background-size: cover;
        }
        .title{
            position: absolute;
            .w(300);
            .h(40);
            color: #fff;
            font-size: 18px;
            .t_c();
            .l_h(40);
            top:0;
            left: 10%;
        }
        .filter{
            .w(375);
            .h(262.5);
            position: absolute;
            left: 0;
            top:0;
            background: rgba(7,17,27,.4)
        }
        .song-box{
            .fixed(262.5,0,0,0,@black);
            overflow: hidden;
            #songList{
                .w(315);
                // .h(1000);
                padding: 20px 30px;
                ul{ 
                    // overflow: hidden;
                    li{
                        display: flex;
                        align-items: center;
                        .h(64);
                        .centext{
                            flex: 1;
                            .h(44);
                           
                            .songName{
                            font-size: 14px;
                            color:#fff;
                            .h(20);
                        }
                        .singerName{
                            font-size: 14px;
                            color:rgba(255,255,255,.3);
                            .h(20);

                        }
                        }
                    }
                }
            }
        }
    }
</style>