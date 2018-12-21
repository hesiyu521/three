<template>
  <div id='product'>
    <div class='box'>
        <div class="item" v-for='(item,index) in list' :key='index'>
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  props:['list'],
  data(){
    return{
      // list:[{img:'/static/product-dryfruit@5.png',name:"芹菜半斤",price:'￥999'},
      //       {img:'/static/product-dryfruit@5.png',name:"芹菜半斤",price:'￥999'},
      //       {img:'/static/product-dryfruit@5.png',name:"芹菜半斤",price:'￥999'},
      //       {img:'/static/product-dryfruit@5.png',name:"芹菜半斤",price:'￥999'},
      //       {img:'/static/product-dryfruit@5.png',name:"芹菜半斤",price:'￥999'}]
    }
    
  }
}
</script>


<style scoped lang="less">
@import url('../../style/main.less');
#product{
  .w(365);
  .p_b(15);
  margin:0px auto;
  .box{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .item{
      .m_t(5);
      border-radius:7px; 
      background: rgb(243,243,243);
      .w(180);
      .h(180);
      img{
        width: 65%;
      }
      display: flex;
      flex-direction:column;
      align-items: center;
      .fs(17);
    }
  }
}

</style>
