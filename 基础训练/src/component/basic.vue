<template>
    <div>
        <h1>{{msg}}</h1>
        <h2 v-text="msg2"></h2>
        <ul>
            <li v-for="item in list">
                <h3>{{item.name}}</h3>
                <dl>
                    <dd>{{item.msg.age}}</dd>
                    <dd>{{item.msg.sex}}</dd>
                    <dd> {{item.msg.position}}</dd>
                </dl>
            </li>
            
        </ul>
        <div :class="{'red':isRed}"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"我是基础训练页面",
            msg2:'我是V-text引用的数据',
            isRed:true,
            list:[
                {
                    name:"啊斌",
                    msg:{ 
                        age:23,
                        sex:"man",
                        position:'test Engineer'
                    }     
                },
                {
                    name:"方哥",
                    msg:{ 
                        age:23,
                        sex:"man",
                        position:'test Engineer'
                    }     
                },
                {
                    name:"佳哥",
                    msg:{ 
                        age:23,
                        sex:"man",
                        position:'moving Engineer'
                    }     
                },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.red{
    background-color: red
}
</style>