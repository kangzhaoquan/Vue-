import axios from '../utils/axios'
import jsonp from 'jsonp'
// 获取到推荐列表
export const getRecommentList=()=>{
    return new Promise((resolve,reject)=>{
        let url='/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.03328395236535786'
        axios.get(url)
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
// 获取轮播图图片
export const  getBanner=()=>{
    return new Promise((resolve,reject)=>{
      let url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1'
        jsonp(url,{param:'jsonpCallback'},(err,data)=>{
            if(err){
              reject(err)
            }else{
              resolve(data)
            }
        })
    })
  }
// 获取歌手数据
export const getSingerList=()=>{
  return new Promise((resolve,reject)=>{
    let url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq'
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 获取歌手歌单

export const getSongList=(mid)=>{
  var mid=mid||'002J4UUk29y8BY'
  return new Promise((resolve,reject)=>{
    let url=`https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${mid}`
    jsonp(url,{param:'jsonpCallback'},(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

// 根据mid 获取歌曲正确地址
export const  getMusicUrl=(mid)=>{
  console.log(mid)
  let url='/hy/cgi-bin/musicu.fcg'
  // https://u.y.qq.com/cgi-bin/musicu.fcg
  let songmid=mid||'003mBrF72dILfK'
  let data={
   params:{
     '-':'getplaysongvkey18692067669581247',
     g_tk: 5381,
     loginUin: 0,
     hostUin: 0,
     format: 'json',
     inCharset: 'utf8',
     outCharset: 'utf-8',
     notice: 0,
     platform: 'yqq.json',
     needNewCode: 0,
     data:`{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"1595362978","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"1595362978","songmid":["${songmid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":20,"cv":0}}`
   }
  }
  return new Promise((resolve,reject)=>{
    axios(url,data)
    .then((data)=>{
      let prev='http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/'
      let purl = data.req_0.data.midurlinfo[0].purl
       resolve(prev+purl)
    })
  })


}