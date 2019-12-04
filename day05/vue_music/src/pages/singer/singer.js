export const initSingerData=(list)=>{
    console.log('歌手数据',list)
    // 创建默认数据格式 hot
    let singers= {'hot':{title:'hot',list:[]}}
    // 循环数据源 组成需要的数据对象
    for(let index = 0; index<list.length; index++){
        let {Findex,Fsinger_name,Fsinger_mid}=list[index]
        // 如果前十条是最热
        if(index<10){
            singers.hot.list.push({Findex,Fsinger_name,Fsinger_mid})
        }
        // 根据首字母进行判断 新的数据格式是否存在 存在 push 歌手 不存在添加对象
        if(singers[Findex]){
            // 数据下标有了list push
            singers[Findex].list.push({Findex,Fsinger_name,Fsinger_mid})
        }else{
            // 添加新的
            singers[Findex]={
                title:Findex,
                list:[{Findex,Fsinger_name,Fsinger_mid}]
            }
        }
    }
    // 将对象转化为数组 用于sort 排序
    let hot=[singers.hot]
    // console.log(hot)
    let other=[]
    // 将sort与其他特殊格式进行分类
    for(const key in singers){
        if(key!=='hot' && key!=='9'){
            other.push(singers[key])
        }
    }
    // 用sort按照下标进行排序
    let sortArr=other.sort((a,b)=>{
        return a.title.charCodeAt()-b.title.charCodeAt()
    })
    let result = hot.concat(sortArr)
    console.log(result)
    return result
}
