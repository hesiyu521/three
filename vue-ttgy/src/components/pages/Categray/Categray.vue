<template>
  <div id='catagray'>
   Categray
   <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from 'common/TabBar'

export default {
  name: 'Categray',
  components:{TabBar},//注册引入的组件（必须注册，否则组件不能使用）
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');

#catagray{
  .fs(100);
  background:rgb(121, 51, 63);
}
</style>
