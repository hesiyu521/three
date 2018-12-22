<template>
  <ul id='tabbar'>
     <router-link
		 v-for='(item ,index) in navlist'
     :to='item.path'
     tag='li'
	 	 :key='index'
	 	 active-class='sel'
     >
      <i :class="item.icon"></i>
       <br>
 	{{item.title}}

     </router-link>

   </ul>
</template>

<script>


export default {
  name: 'TabBar',
  components: {

  },
  data(){
  	return {
  		navlist:[
  		{path:'/home',title:'首页',icon:'iconfont icon-CombinedShape'},
  		{path:'/categray',title:'分类',icon:'iconfont icon-fenlei'},
  		{path:'/shopcar',title:'购物车',icon:'iconfont icon-gouwuche'},
  		{path:'/my',title:'我的果园',icon:'iconfont icon-daohanglan-05'}]
  	}
  }
}

</script>

<style lang="less" scoped>
@import url('../../style/main.less');
@import url('../../style/iconfont/iconfont.css');

#tabbar{
    border-top: 1px solid #ccc;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	.h(140);
	.fs(32);
	background: @tabBg;
	li{
    padding-top:0.5rem;
      width: 25%;
      text-align:center;
      .lh(50);
    .fs(28);
      color:@tabColor;

	}
  i{
    .fs(55);
    margin-left:.2rem;
  }
	.sel{
		color: @tabSelColor;
	}
}
</style>
