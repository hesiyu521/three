<template>
  <div id='home'>
   <Header title='零食商贩' ></Header>
	 <Banner class='banner'></Banner>
   <HomeTheme></HomeTheme>
   <div class='newtitle'>最近新品 </div>
   <ProductList></ProductList>
   <div class='wor'></div>
   <TabBar></TabBar>
  </div>
</template>

<script>
import Banner from './Banner'
import TabBar from 'common/TabBar'
import Header from 'common/Header'
import HomeTheme from 'pages/Home/HomeTheme'
import ProductList from 'common/ProductList'
export default {
  name: 'Home',
  components:{Banner,TabBar,Header,HomeTheme,ProductList},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');

#home{
  .banner{
    .m_t(45);
  }
  .newtitle{
    .h(25);
    .lh(25);
    .fs(18);
    color: @themeColor;
    text-align:center;
  }
  .wor{
    .h(60);
  }
}
</style>
