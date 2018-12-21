// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//等同于 <script src='./base/vue.js'>
import Axios from 'axios'
import router from './router'
import reset from './style/reset.less' //无视文件类型都是模块
import App from './App'
Vue.config.productionTip = false
//响应拦截器
Axios.interceptors.response.use(function (response) {
	console.log('响应拦截器')
	console.log(response)
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
Vue.prototype.$axios=Axios//挂载到原型链上，不用再每次都导入axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'

})
