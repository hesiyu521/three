
<template>

	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for='(item,index) in bannerlist' :key='index'>
	        	<img :src='root+item.imgPath' alt="">
	        	<!-- {{item}} -->
	        </div>
	        
	    </div>

	</div>

</template>

<script>
import Vue from  'vue'
import Swiper from 'swiper'
export default {
  name: 'Banner',
  data () {
    return {
      bannerlist:[],
      root:'http://127.0.0.1:3000'
    }
  },
  methods:{
  	initSwiper(){
  	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true	   
	  }) 
  	},
  	getBannerData(){

  		console.log(this)
  		this.$axios.post('/test/admin/Banner/getBannerByPage')
	  	.then((res)=>{
	  		console.log(res)
	  		console.log('Axios')
	  		// if (res.err!==0) { return false}
	  		console.log(res)
	  		console.log(1)
	  		console.log(res.data)
	  		this.bannerlist=res.data
	  		Vue.nextTick(()=>{
	  			this.initSwiper()
	  		})
	  		console.log(res)
	  	})
	  	.catch((err)=>{
	  		console.log(err)
	  	})	
  	}
  },
  mounted(){
  	this.getBannerData()
  	
  }
}
</script>


<style scoped lang="less">
@import url('../../../../node_modules/swiper/dist/css/swiper.css');
@import url('../../../style/main.less');
img{
	.w(375);
	.h(200);
}
</style>
