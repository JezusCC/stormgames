<template>
  <div>
    <!-- register box -->
    <div>
      <h2>注册</h2>
      <form action="#">
        <input type="text" placeholder="用户名" name="username" />
        <input type="text" placeholder="邮箱" name="useremail" />
        <input type="password" placeholder="密码" name="upwd" />
        <input type="password" placeholder="确认密码" name="upwd" />
        <button @click="registerBtn()">注册</button>
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
  },
};
</script>

<style scoped>
</style>