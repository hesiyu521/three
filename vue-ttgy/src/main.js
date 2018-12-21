// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//导入Vue框架插件
import App from './App'//导入App.vue组件
import router from './router'//导入路由（index.js）
import Axios from 'axios'
import reset from './style/reset.less'

Vue.config.productionTip = false//响应拦截器
Vue.prototype.$axios=Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',//选中作用域（根目录的index.html）
  router,//使用路由中的组件
  components: { App },//注册组件
  template: '<App/>'
})
