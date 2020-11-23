<template>
  <div class="registerbox">
    <!-- register box -->
    <div class="register-left">
      <h2>创建您的账户</h2>
      <form action="#">
        <span>登录用户名</span>
        <input
          type="text"
          placeholder="登录用户名"
          name="username"
          v-model="name"
          :class="{'checkerror': checkName()}"
        />
        <span>电子邮箱地址</span>
        <input
          type="text"
          placeholder="邮箱"
          name="useremail"
          v-model="email"
          :class="{'checkerror': checkEmail()}"
        />
        <span>账户密码</span>
        <input
          type="password"
          placeholder="账户密码"
          name="upwd"
          v-model="password"
          :class="{'checkerror': checkpassword()}"
        />
        <span>确认您的账户密码</span>
        <input
          type="password"
          placeholder="确认您的密码"
          name="upwd"
          v-model="samepassword"
          :class="{'checkerror': checkSamepassword()}"
        />
        <div class="register-option">
          <button @click="registerBtn()">注册</button>
          <a href="">了解更多</a>
        </div>
      </form>
    </div>
    <div class="register-right">
      <div class="register-right-news"></div>
      <a @click.prevent="backToRegister()">已有账号？返回登录</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      samepassword: '',
    };
  },
  methods: {
    registerBtn() {
      console.log('registerBtn');
    },
    checkName(){
      let regName = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/;
      if(this.name == '' || !regName.test(this.name)){
        return true
      }else{
        return false
      }
    },
    checkEmail() {
      //验证邮箱正则
      let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(this.email =='' || !regEmail.test(this.email)) {
        // console.log('有错')
        //no BUG！！！
        // callback(new error('邮箱不规范'))
        return true
      }else{
        // console.log('ok')
        return false
      }
    },
    checkpassword(){
      if(this.password.length < 6){
        return true
      }else{
        return false
      }
    },
    checkSamepassword(){
      if((this.samepassword != this.password) || this.samepassword == ''){
        return true
      }else{
        return false
      }
    },
    backToRegister(){
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/signio/register.css");
</style>