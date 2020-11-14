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
        />
        <span>电子邮箱地址</span>
        <input
          type="text"
          placeholder="邮箱"
          name="useremail"
          v-model="email"
          @click="emailArr"
          :style="emailErr()"
        />
        <span>账户密码</span>
        <input
          type="password"
          placeholder="账户密码"
          name="upwd"
          v-model="password"
        />
        <span>确认您的账户密码</span>
        <input
          type="password"
          placeholder="确认您的账户密码"
          name="upwd"
          v-model="samepassword"
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
      name: "",
      email: "",
      password: "",
      samepassword: "",
    };
  },
  methods: {
    registerBtn() {
      console.log("registerBtn");
    },
    emailArr() {
      //验证邮箱正则
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(this.email !='' && !regEmail.test(this.email)) {
        //报错
      }
    },
    //
    emailErr() {
      return {
        'border':'solid 0.125rem #FF0000'
      }
    },

    backToRegister() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/signio/register.css");
</style>