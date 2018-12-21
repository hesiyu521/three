
<template>
  <div id='header'>
    <div class='back' v-if='btnshow' @click='goback'>返回</div>
    <span>{{title}}</span>
  </div>

</template>

<script>


export default {
  name: 'Err',
  components: {
    
  },
  props:['btnshow','title'],
  data(){
    return {
    
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
 
}
 // a-b-c-d
</script>

<style lang="less" scoped>
@import url('../../style/main.less');
#header{
  background: @themeColor;
  .w(375);
  .h(45);
  .fs(18);
  text-align:center;
  .lh(45);
  color: #fff;
  position: fixed;
  top: 0px;
  z-index:999;
  display: flex;
  justify-content: center;
  .back{
    position: absolute;
    left:10px;
  }
}

</style>
