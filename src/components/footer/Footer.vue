<!-- footer banner component -->
<template>
  <div class="footer_box">
    <footer>
      <div class="footer-top">
        <div class="logo">
          <img src="https://crm.vazyme.com/cetool/images/u1102_logo.png" alt />
          <div class="span_box">
            <div>
              <span class="tips company">南京诺唯赞生物科技股份有限公司</span>
            </div>
            <div>
              <p class="tips" style="margin-top:20px">电话：400-600-9335</p>
            </div>
          </div>
        </div>
        <div class="phone">
          <span class="title">联系我们</span>
          <!-- <span class="number">400-600-9335</span> -->
          <span class="online">sales@vazyme.com (销售咨询)</span>
          <span class="online">support@vazyme.com (技术支持)</span>
          <span class="online">marketing@vazyme.com (市场推广)</span>
        </div>
        <div class="code">
          <span class="title">关注我们</span>
          <img src="@/assets/img/footer/code.jpg" alt />
        </div>
      </div>
      <div class="copyright">
        <p>地址：江苏省南京经济技术开发区科创路红枫科技园D2栋&nbsp;&nbsp;</p>
        <p>
          版权所有 | 南京诺唯赞生物科技股份有限公司 &nbsp;&nbsp;备案号 |
          苏ICP备:12014779号
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
.footer_box {
  width: 100%;
  background: #f2f7fb;
}
footer {
  background-color: #f2f7fb;
  width: 1200px;
  /* height: 200px; */
  margin: auto;
}
footer p {
  font-size: 14px;
  /* margin: 10px; */
  color: var(--grey);
}
.footer-top {
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.span_box {
  text-align: left;
}
.span_box div {
  display: inline-block;
}
.tips {
  color: #000;
  font-size: 14px;
  user-select: text;
}
.company {
  color: #848484;
  font-size: 17px;
  font-weight: 600;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 260px;
  height: 120px;
  border-bottom: 1px solid #ffffff0d;
  /* padding: 20px 0; */
}
.logo img {
  width: 152px;
}

.phone {
  display: flex;
  width: 260px;
  color: #000;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.phone .online {
  font-size: 14px;
}
.copyright {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.copyright p,
span {
  display: inline-block;
  user-select: text;
}
.title {
  color: #36404a;
  font-size: large;
  font-weight: 600;
}
.number {
  color: var(--blue);
  user-select: all;
}
.code{
  display: flex;
  flex-direction: column;
}
.code img {
  width: 100px;
  height: 100px;
}
</style>