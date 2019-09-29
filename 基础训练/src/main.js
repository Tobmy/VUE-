import Vue from 'vue'
import App from './App.vue'

// 1.引入路由和要挂载的组件
import  vueRouter  from "vue-router";
Vue.use(vueRouter)

// 引入vue-resource
import vueResource from "vue-resource"
Vue.use(vueResource)


// 引入Scss文件,要使用这种方法，必须要在项目创建的时候，选择使用SCSS
import "./assets/css/basic.scss"

// 引入组件
import home from "./component/home.vue"
import news from "./component/news.vue"
import basic from "./component/basic"
import newcontent from "./component/NewContent.vue"

// 2.配置路径
const routes = [
  {path:'/home',component:home},
  {path:'/news',component:news},
  {path:'/basic',component:basic},

  // 配置动态路由
  {path:'/newcontent/:aid',component:newcontent}, 

  // 如果没有匹配到，则重定向到首页
  {path:'*',redirect:'/home'},
]

// 3.把路径实例化为router
const router = new vueRouter({routes:routes})

// 4.挂载实例化的路由

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
