<template>
  <div>
    <header class="top-header">
      <router-link to="/" class="text texta">取消</router-link>
      <h3>注册</h3>
      <router-link to="/login" class="text">登录</router-link>
    </header>

    <div class="login">
      <form action method="post">
        <ul>
          <li>
            <img src="../assets/images/login.png">
            <label>账号</label>
            <input type="text" v-model="from.username" placeholder="请输入账号">
          </li>
          <li>
            <img src="../assets/images/password.png">
            <label>密码</label>
            <input type="password" v-model="from.password" placeholder="请输入密码">
          </li>
          <li>
            <img src="../assets/images/password.png">
            <label>密码</label>
            <input type="password" v-model="from.password_confirmation" placeholder="请确认密码">
          </li>
        </ul>
        <input @click.prevent="submit" type="submit" value="立即注册">
      </form>
    </div>
  </div>
</template>
<script>
import { Dialog, Toast } from "we-vue";
export default {
  data() {
    return {
      from: {
        username: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    submit: function() {
      this.axios
        .post("http://127.0.0.1:8000/api/members", this.from)
        .then(res => {
          if (res.data.status_code == "200") {
            Dialog({
              message: "注册成功",
              skin: "ios"
            }).then(res => {
              this.$router.push("login");
            });
          } else {
            Toast.fail({
              duration: 1000,
              message: "注册账号或者密码不正确"
            });
          }
        });
    }
  }
};
</script>

