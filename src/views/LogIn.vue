<!--  -->
<template>
  <div class="page">
    <div class="content">
      <div class="video">
        <!-- <video src="@/assets/video/bg.mp4" muted autoplay="autoplay" loop width="100%"></video> -->
      </div>
      <header></header>
      <section class="middle">
        <nav>
          <NavBar></NavBar>
        </nav>
        <section id="login_box">
          <img src="../assets/img/logo/logo_white_nopadding.png" />
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
      </section>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
export default {
  data() {
    return {};
  },

  components: { NavBar, Footer },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped>
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
#content {
  padding: 100px auto;
}
nav {
  /* display: inline-block; */
  overflow: hidden;
  /* float:inline-end; */
}
video {
  position: absolute;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  /*加滤镜*/
  filter: blur(150px);
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  z-index: -11;
}
.video::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(17, 3, 212, 0.349);
  z-index: -10;
}
.middle {
  overflow: hidden;
  /* background: url("../assets/img/loginBackground.jpg"); */
  background-size: cover;
  background-position-x: 48%;
}
#login_box {
  margin: 103px 0px;
  margin-bottom: 105px;
  float: right;
  margin-right: 200px;
  /* padding: 103px auto; */
  width: 384px;
  height: 441px;
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.3); */
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
  /* display: block; */
  margin-top: 8px;
  height: 48px;
  width: 336px;
  background-color: transparent;
  /* border-radius: 4px; */
  border: none;
  border-bottom: #ffffff 1px solid;
  font-size: 18px;
  text-indent: 11px;
}
input[placeholder]:focus {
  border-bottom: #ffffff 2px solid;
}
input[type="button"] {
  /* display: block; */
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
footer {
  /* height: 128px; */
  background-color: #031032;
  background-image: linear-gradient(#031032, #000000, 180deg);
}
footer p {
  font-size: 14px;
  margin: 10px;
  color: #c4c4c4;
}
</style>
