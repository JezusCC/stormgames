<template>
  <div class="loginbox">
    <!-- loginbox -->
    <div class="login-left">
      <!-- login-Left -->
      <h2>登录</h2>
      <form>
        <span>Storm账号名</span>
        <input
          type="text"
          placeholder="输入您的账号"
          name="username"
          v-model="loginusername"
        />
        <span>Storm通行密码</span>
        <input
          type="password"
          placeholder="输入您的密码"
          name="password"
          v-model="loginuserpassword"
        />
        <div class="login-option">
          <button @click.prevent="loginBtn">登录</button>
          <a href="">忘记密码？</a>
        </div>
      </form>
    </div>
    <div class="login-right">
      <div class="login-right-news"></div>
      <a @click.prevent="jumpToRegister()">加入Storm</a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      loginusername: '',
      loginuserpassword: '',
    };
  },
  methods: {
    loginBtn() {
      console.log('正在发送登录请求')
      this.$axios(
        {
          method:'post',
          url:this.$baseip+'/login',
          data:{uname:this.loginusername,pwd:this.loginuserpassword}
        }
      ).then(
        (result) => {
          if(result.data.state){
            console.log(result.data.message)
            this.$store.commit('loginSuccess',{
              id: 100000
            })
            this.$router.push('/')
          }else{
            console.log(result.data.message)
          }
        },
        (err) => console.log(err)
      );
    },
    jumpToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/signio/login.css");
</style>