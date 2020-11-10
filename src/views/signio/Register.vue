<template>
  <div class="registerbox">
    <!-- register box -->
    <div class="register-left">
      <h2>创建您的账户</h2>
      <form action="#">
        <span>登录用户名</span>
        <input type="text" placeholder="登录用户名" name="username" />
        <span>电子邮箱地址</span>
        <input type="text" placeholder="邮箱" name="useremail" />
        <span>账户密码</span>
        <input type="password" placeholder="账户密码" name="upwd" />
        <span>确认您的账户密码</span>
        <input type="password" placeholder="确认您的账户密码" name="upwd" />
        <div class="register-option">
          <button @click="registerBtn()">注册</button>
          <a href="">了解更多</a>
        </div>
      </form>
    </div>
    <div class="register-right">
      <a @click.prevent="backToRegister()">已有账号？返回登录</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    registerBtn() {
      console.log("registerBtn");
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