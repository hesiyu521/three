<template>
  <div id='theme'>
   <Header btnshow='ture' :title='themeName'></Header>
   <div class='theme_top'>
     <img src="/static/1@theme-head.png" alt="">
   </div>
   <ProductList :list='list'></ProductList>
  </div>
</template>

<script>
import Header from 'common/Header'
import ProductList from 'common/ProductList'
export default {
  name: 'Theme',
  components:{Header,ProductList},
  data(){
    return{
      themeName:'零食商贩',
      
    }
    
  },
  created(){
    console.log(this.$route);
    //更新主题标题
    this.themeName=this.$route.params.title
    let themeId=this.$route.params.themeId
    //根据id 获取新的数据的ajax
    this.list=[{img:`/static/product-dryfruit@${themeId}.png`,name:"芹菜半斤",price:'￥999'},
            {img:`/static/product-dryfruit@${themeId}.png`,name:"芹菜半斤",price:'￥999'},
            {img:`/static/product-dryfruit@${themeId}.png`,name:"芹菜半斤",price:'￥999'},
            {img:`/static/product-dryfruit@${themeId}.png`,name:"芹菜半斤",price:'￥999'},
            {img:`/static/product-dryfruit@${themeId}.png`,name:"芹菜半斤",price:'￥999'}]
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');
#theme{
  .theme_top{
    .m_t(45);
    .w(375);
    img{
      .w(375);
    }
  }
}

</style>
