<template>
    <div>
        <h1>{{msg}}</h1>
        <!-- 给link的地址加参数可以实现传值  :key="index"可以消除红色波浪线-->
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/newcontent/' + item.aid">{{item.title}}</router-link>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'我是新闻页面',
            list:[],
        }
    },
    methods:{
        requertDate(){
                    let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
                    this.$http.get(api).then((res)=>{
                    if(res){
                        // console.log(res);
                        this.list = res.body.result;
                        // console.log(this.list)
                    }
                }).catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        // 组件挂载的时候请求新闻内容
        this.requertDate();
    }
 
}
</script>