
<template>
  <ul id='tabbar'>
     <router-link 
     :to="item.path" 
     tag='li'
	 v-for='(item ,index) in navlist'
	 :key='index'
	 active-class='sel'
     >
 	{{item.title}}</router-link>

   </ul>
</template>

<script>


export default {
  name: 'TabBar',
  components: {
    
  },
  data(){
  	return {
  		navlist:[{path:'/home',title:'首页',icon:''},
  		{path:'/categray',title:'分类',icon:''},
  		{path:'/shopcar',title:'购物车',icon:''},
  		{path:'/my',title:'我的',icon:''}]
  	}
  }
}

</script>

<style lang="less" scoped>
@import url('../../style/main.less');

#tabbar{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	.h(60);
	.fs(16);
	background: @tabBg;
	li{
      width: 25%;
      text-align:center;
      .lh(60);
      color:@tabColor;

	}
	.sel{
		color: @tabSelColor;
	}
}
</style>
