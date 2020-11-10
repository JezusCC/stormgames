<template>
  <div>
    <!-- register box -->
    <div>
      <h2>创建您的账户</h2>
      <form action="#">
        <table>
          <tr>
            <td><span>登录用户名</span></td>
          </tr>
          <tr>
            <td><input type="text" placeholder="用户名" name="username" /></td>
          </tr>
          <tr>
            <td><span>电子邮箱地址</span></td>
          </tr>
          <tr>
            <td><input type="text" placeholder="邮箱" name="useremail" /></td>
          </tr>
          <tr>
            <td><span>账户密码</span></td>
          </tr>
          <tr>
            <td><input type="password" placeholder="密码" name="upwd" /></td>
          </tr>
          <tr>
            <td><span>确认您的账户密码</span></td>
          </tr>
          <tr>
            <td>
              <input type="password" placeholder="确认密码" name="upwd" />
            </td>
          </tr>
          <tr>
            <td><button @click="registerBtn()">注册</button></td>
          </tr>
          <tr>
            <td><a @click.prevent="backToRegister()">已有账号？返回登录</a></td>
          </tr>
        </table>
      </form>
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
</style>