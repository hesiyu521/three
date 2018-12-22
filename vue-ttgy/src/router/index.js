import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

//引入需要跳转的组件
import Home from 'pages/Home/Home'
import Categray from 'pages/Categray/Categray'
import My from 'pages/My/My'
import Shopcar from 'pages/Shopcar/Shopcar'
import Login from 'pages/Login/Login'

//配置跳转信息
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/categray',
      component:Categray
    },
    {
      path:'/my',
      component:Login
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/login',
      component:Login
    }

  ]
})
