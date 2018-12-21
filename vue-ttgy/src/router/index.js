import Vue from 'vue'
import VueRouter from'vue-router'
Vue.use(VueRouter)

import Home from 'pages/Home/Home'
import Theme from 'pages/Theme/Theme'
import Categray from 'pages/Categray/Categray'
import Shopcar from 'pages/Shopcar/Shopcar'
import My from 'pages/My/My'
import Err from 'common/Err'
let router=new VueRouter({
	routes:[
	        {path:'/',redirect:'/home'},//路由的重定向
			{path:'/home',component:Home},
			{path:'/categray',component:Categray},
			{path:'/shopcar/:hehe/:xixi',component:Shopcar},
			{name:'xixi',path:'/theme/:themeId/:title',component:Theme},//命名导航
			{path:'/my',component:My},
			{path:'/notfind',component:Err},
			{path:'**',redirect:'/notfind'}
			]
})

export default router