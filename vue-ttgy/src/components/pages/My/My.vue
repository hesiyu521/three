<template>
  <div id='my'>
My
<TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from 'common/TabBar'
export default {
  name: 'My',
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

#my{
  .fs(100);
  background:rgb(23, 196, 101);
}
</style>
