<template>
  <div id='home'>
    <Header title="个人中心"></Header>
   <TabBar></TabBar>
  </div>
</template>

<script>
import Header from 'common/Header'
import TabBar from 'common/TabBar'
export default {
  name: 'Home123',
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
