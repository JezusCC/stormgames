<template>
  <div>
    <!-- loginbox -->
    <div>
      <!-- login-Left -->
      <h2>登录</h2>
      <form action="#">
        <table>
          <tr>
            <td><span>Storm账号名</span></td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="账号"
                name="username"
                v-model="loginname"
              />
            </td>
          </tr>
          <tr>
            <td><span>Storm通行密码</span></td>
          </tr>
          <tr>
            <td>
              <input
                type="password"
                placeholder="密码"
                name="password"
                v-model="loginpassword"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button @click="loginBtn()">登录</button>
              <a href="">忘记您的密码？</a>
            </td>
          </tr>
        </table>
      </form>
    </div>
    <div>
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