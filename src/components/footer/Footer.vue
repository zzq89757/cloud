<!-- footer banner component -->
<template>
  <div>
    <footer>
      <div class="logo">
        <img src="@/assets/img/logo/logo-white.png" alt="" />
      </div>
      <div class="icon">
        <div class="phone">
          <img src="@/assets/img/footer/phone.png" alt="" class="icon_img"/>
          <span>400-600-9335</span>
        </div>
        <div class="phone">
          <img src="@/assets/img/footer/email.png" alt="" class="icon_img"/>
          <span>sales@vazyme.com</span>
        </div>
        <div class="phone">
          <img src="@/assets/img/footer/msg.png" alt="" class="icon_img"/>
          <!-- <span>400-600-9335</span> -->
          <img src="@/assets/img/footer/code.jpg" alt="" class="code"/> 
        </div>
      </div>
      <div class="copyright">
        <p>
          版权所有 | 南京诺唯赞生物科技股份有限公司 &nbsp;&nbsp;备案号 |
          苏ICP备:12014779号
        </p>
        <p>
          地址：江苏省南京经济技术开发区科创路红枫科技园D2栋
        </p>
      </div>
    </footer>
  </div>
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
<style lang='css' scoped>
footer {
  /* background-color: #01237c; */
  height: 400px;
  background: url("../../assets/img/bg/foot_bg.png");
  /* background-image: linear-gradient(#031032, #000000, 180deg); */
}
footer p {
  font-size: 14px;
  margin: 10px;
  color: #c4c4c4;
}
.logo {
  border-bottom: 1px solid #ffffff0d;
  padding: 20px 0;
}
.logo img {
  width: 188px;
}
.icon {
  height: 100px;
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #ffffff0d;
}
.icon_img{
  margin-right: 20px;
}
.phone {
  display: flex;
  /* width: 160px; */
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.copyright {
  display: flex;
  height: 133px;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
}
.copyright p,
span {
  display: inline-block;
}
.code{
  width: 80px;
  height: 80px;
}
</style>