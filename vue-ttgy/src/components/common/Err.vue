
<template>
  <div>
    <!-- <router-link to='/'>点击跳转回首页</router-link> -->
    <span>服务器异常。error</span>
  </div>

</template>

<script>


export default {
  name: 'Err',
  components: {
    
  },
 mounted(){
  setTimeout(()=>{
    this.$router.push('/')
    // this.$router.replace('/')

  },2000);
 }
}
 // a-b-c-d
</script>

<style lang="less" scoped>
@import url('../../style/main.less');


</style>
