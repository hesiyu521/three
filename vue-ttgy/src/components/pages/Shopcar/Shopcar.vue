<template>
  <div id='shopcar'>
	 Shopcar
     <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from 'common/TabBar'
export default {
  name: 'Shopcaar',
  components:{TabBar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');

#shopcar{
  .fs(100);
  background:rgb(73, 96, 202);
}
</style>
