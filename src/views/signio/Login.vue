<template>
  <div class="loginbox">
    <!-- loginbox -->
    <div class="login-left">
      <!-- login-Left -->
      <h2>登录</h2>
      <form action="#">
        <span>Storm账号名</span>
        <input
          type="text"
          placeholder="输入您的账号"
          name="username"
          v-model="loginname"
        />
        <span>Storm通行密码</span>
        <input
          type="password"
          placeholder="输入您的密码"
          name="password"
          v-model="loginpassword"
        />
        <div class="login-option">
          <button @click="loginBtn()">登录</button>
          <a href="">忘记密码？</a>
        </div>
      </form>
    </div>
    <div class="login-right">
      <!-- news-Right and register -->
      <a @click.prevent="jumpToRegister()">加入Storm</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      loginname: "",
      loginpassword: "",
    };
  },
  methods: {
    loginBtn() {
      // this.$axios
      //   .get("#", {
      //     params: { username: this.loginname, userpwd: this.loginpassword },
      //   })
      //   .then(() => {this.$store.});
    },
    jumpToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/signio/login.css");
</style>