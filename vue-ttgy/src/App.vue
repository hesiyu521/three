<template>
  <div id="app">
   <!-- <component is:></component> -->
   <router-view></router-view>
   <!--  开辟一片空间存放匹配的组件-->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}

//  8k                 1s         200k  5s
//  base64 12k         0.5s.      220k  6s
//. 20k  一下base64   20
</script>

<style lang="less" scoped>
// @color:green;

/* .w(@px){
  width: unit(@px/37.5,rem)
  //unit 函数给第一个数字参数添加一个单位
} */

/* #test{
  .w(375);
  height: 100px;
  background: @color;
} */
</style>
