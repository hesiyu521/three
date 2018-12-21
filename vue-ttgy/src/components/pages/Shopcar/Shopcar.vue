<template>
  <div id='home'>
	 这里是购物车界面
   <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from 'common/TabBar'
export default {
  name: 'Home',
  components:{TabBar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">

</style>
