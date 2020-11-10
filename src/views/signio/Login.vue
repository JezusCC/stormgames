<template>
  <div>
    <!-- loginbox -->
    <div>
      <!-- login-Left -->
      <h2>登录</h2>
      <form action="#">
        <input
          type="text"
          placeholder="账号"
          name="username"
          v-model="loginname"
        />
        <input
          type="password"
          placeholder="密码"
          name="password"
          v-model="loginpassword"
        />
        <a @click.prevent="jumpToRegister()">没有账号？点击注册</a>
        <button @click="loginBtn()">登录</button>
      </form>
    </div>
    <div>
      <!-- news-Right -->
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
</style>