<template>
  <div id='home'>
	 <Header title="分类"></Header>
   <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from 'common/TabBar'
import Header from 'common/Header'
export default {
  name: 'Home',
  components:{TabBar,Header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">

</style>
