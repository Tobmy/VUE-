<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
		 <router-link to="/news">新闻</router-link>
     <router-link to="/basic">基础训练</router-link>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import basic from "./component/basic"

export default {
  name: 'app',
  data () {
    return {
      msg: '我是根组件'
    }
  },
  components:{
    "v-basic":basic,
  }
}
</script>

<style lang="scss">

</style>
