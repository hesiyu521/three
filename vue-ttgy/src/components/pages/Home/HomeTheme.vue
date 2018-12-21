<template>
  <div id='theme'>
     <p>精选主题</p>
     <div class='box'>
        <div class="item" 
        v-for='(item,index) in themes' 
        :key='index'
        :class='index==2?"big":""'
        @click='goTheme(item)'
        >
          <img :src="item.img" alt="">
        </div>

     </div>
  </div>
</template>

<script>

export default {
  name: 'HomeTheme',
  data(){
    return{
      themes:[{title:'美味水果世界',img:'/static/1@theme.png',themeId:1},
      {title:'新品首发',img:'/static/2@theme.png',themeId:2},
      {title:'做个干物女',img:'/static/3@theme.png',themeId:3}]
    }
  },
  methods:{
    goTheme(item){
      // this.$router.push('/theme/123')
      // this.$router.push({path:'/theme/xixi'})
      //this.$router.push({path:'/theme',query:{name:'网易'}})
      // this.$router.push({name:'xixi',params:{themdId:1,title:'heheh'}})
      this.$router.push({path:`/theme/${item.themeId}/${item.title}`})
      //命名导航
    }
  }
}
</script>


<style scoped lang="less">
@import url('../../../style/main.less');
#theme{
  p{
    color:@themeColor;
    text-align:center;
    .h(25);
    .lh(25);
    .fs(18);
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      width: 49%;
      img{
        width: 100%;
      }
    }
    .big{
      width: 100%;
    }
  }
}

</style>
