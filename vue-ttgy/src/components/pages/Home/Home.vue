<template>
  <div id='home'>
   {{homes}}
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
      homes:"home",
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');

#home{
  .fs(100);
  background:pink;
  height:100%
}
</style>
