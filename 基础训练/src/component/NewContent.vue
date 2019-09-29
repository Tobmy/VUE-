<template>
    <div class="newcontent">
        <h2>{{list.title}}</h2>
        <div v-html="list.content"></div>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'我是新闻详情',
            list:[],
        }
    },
    mounted(){
       
    },
    methods:{
        requestData(){
            let api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+this.$route.params.aid
            this.$http.jsonp(api).then(function(response){
                // 在这里，用不用箭头函数，this都是指向当前VUE实例。因为windows等于当前VUE实例
                // 箭头函数的this是定义的时候就绑定的，指的是当前的this
                // 而普通函数的this，只有才函数被调用的时候，才会绑定，指向调用当前函数的对象
                // console.log(response)
                if(response){
                    this.list = response.body.result[0]
                    // console.log(this.list)
                }
            }).catch((err)=>{
                console.log(this)
            })
        }
    },
    mounted(){
        this.requestData();
    }
}
</script>