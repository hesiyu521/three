<template>
  <div id='login'>

    <h2>
      <i @click="goBack" class="iconfont icon-jiantou" ></i>
      <span>手机号快捷登录</span>
    </h2>

    <div class="content">
      <div class="phone">
        <i class="iconfont icon-shouji"></i>
        <input type="text" placeholder="手机号">
        <span>获取验证码</span>
      </div>
      <div class="password">
        <i class="iconfont icon-yuechi"></i>
        <input type="text" placeholder="短信验证码">
      </div>
      <p>首次用手机号登录将自动为您注册,并有好礼相送.</p>
      <a class="login" href="#">登  录</a>
      <div class="prompt">
        <a href="">账号密码登录</a>
        <a href="">未收到验证码?</a>
      </div>
    </div >
  </div>
</template>

<script>
  import TabBar from 'common/TabBar'
  export default {
    name: 'Login',
    components:{},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>


<style scoped lang="less">
  @import url('../../../style/main.less');
  @import url('../../../style/iconfont/iconfont.css');

  #login{
    height:100vh;
    background: url("../../../../static/login-bg.png");
    .fs(26);
    h2{
      color: @themeColor;
      text-align: center;
      position: relative;
      .lh(110);
      font-weight:100;
      font-family: inherit
    }
    h2 i{
      position: absolute;
      .l(30)
    }
    .content{
      position: absolute;
      left: auto;
      top: 50%;
      right:auto;
      bottom: auto;
      width:84%;
      .h(600);
      padding: 0 8%;
      .m_t(-280)
    }
    input::-webkit-input-placeholder {
                /* placeholder颜色  */
                color: #aab2bd;
           }
    .content input{
      .h(90);
      outline: none;
      font-size: 1rem;
      line-height: .25rem;
      color: #878787;
      margin-left:0.2rem;
      padding-left:.35rem;
      font-family: inherit;
      font-weight:100;
    }
    .phone{
      border-bottom: .01rem solid #d8d8d8;
      .m_b(35)
    }
    .phone input{
      width:60%;
      background: none;
      border: none;
    }
    .phone span{
      display: inline-block;
      background: #bfbfbf;
      width:23%;
      color: white;
      line-height:230%;
      text-align: center;
      border-radius: 0.1rem;
      margin-bottom:0.3rem;
    }
    .password{
      border-bottom: .01rem solid #d8d8d8;
      .m_b(10);
    }
    .password input{
      width:85%;
      background: none;
      border: none;
    }
    p{
      height: 1.5rem;
      line-height: 1.5rem;
      color: #878787;
    }
    .login{
      display: block;
      width: 100%;
      height: 2.4rem;
      margin: 3.5rem 0 1rem;
      border-radius: .2rem;
      background: #ccc;
      line-height:2.4rem;
      font-size: 1rem;
      color: #fff;
      text-align: center;
    }

    .prompt{
      display: flex;
      justify-content: space-between;
    }
    .prompt a{
      color: #f93;
    }
    i{
      .fs(51);
      font-weight:100;
    }
    .phone i{
      color: #878787;
    }
    h2 i{
      font-weight:100;
      .fs(36)
    }
    .password i{
      color: #878787;
    }


  }
</style>
