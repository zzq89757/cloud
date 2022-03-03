<!--  -->
<template>
  <section id="login_box">
    <img src="@/assets/img/logo/logo_white_nopadding.png" />
    <h3>欢迎登录</h3>
    <div class="username_input">
      <input type="text" placeholder="请输入用户名" spellcheck="false" />
      <div></div>
    </div>
    <div class="pwd_input">
      <input type="password" placeholder="请输入密码" />
    </div>
    <div>
      <input type="button" value="登录" />
    </div>
    <span class="tips">还没有账号？</span>
    <span class="tips register">立即注册</span>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang="css" scoped>
.content {
  min-width: 800px;
}
input {
  display: inline-block;
  color: #ffffff;
  margin-top: 20px;
  outline: none;
}
h3,
span {
  margin-top: 20px;
}
.middle {
  overflow: hidden;
  background-size: cover;
  background-position-x: 48%;
}
#login_box {
  float: right;
  width: 384px;
  height: 441px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 1px;
  background-color: rgba(255, 255, 255, 0.05);
  background-image: linear-gradient(
      160deg,
      hsla(0, 0%, 100%, 0.2),
      hsla(0, 0%, 100%, 0) 33.83%,
      hsla(0, 0%, 100%, 0) 64.31%,
      hsla(0, 0%, 100%, 0.2)
    )
    1;
  border: 1px solid;
  border-image: linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0) 33.83%,
      rgba(255, 255, 255, 0) 64.31%,
      rgba(255, 255, 255, 0.2)
    )
    1 / 1 / 0 stretch;
}
#login_box img {
  width: 42%;
  float: left;
}
#login_box div {
  margin-top: 20px;
}
input[placeholder] {
  margin-top: 8px;
  height: 48px;
  width: 336px;
  background-color: transparent;
  border: none;
  border-bottom: #ffffff 1px solid;
  font-size: 18px;
  text-indent: 11px;
}
input[placeholder]:focus {
  border-bottom: #ffffff 2px solid;
}
input[type="button"] {
  width: 268px;
  height: 48px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  background-image: linear-gradient(30deg, #007ccd 3.1%, #08cbff 100%);
  box-shadow: none;
  border: #3918a7;
}
.tips {
  display: inline-block;
  color: #ffffff;
}
.register {
  cursor: pointer;
}
.register:hover {
  color: #08cbff;
}
</style>

