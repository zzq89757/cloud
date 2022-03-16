<template>
  <div id="root">
    <NavBar></NavBar>
 <Banner :message="tool_message">
   <img src="@/assets/img/banner/tool.png" alt="" slot="img" class="koutu"/> </Banner>

    <CenterBanner
      style="background-color: white"
      :tips="banner_msg.tips"
      :title="banner_msg.title"
    ></CenterBanner>
    <Product :productList="data"></Product>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";
import Product from "@/components/product/Product";
import { request } from "@/network/axios";
import CenterBanner from "../components/banner/CenterBanner.vue";
import Footer from "../components/footer/Footer.vue";
import BannerBg from "../components/banner/BannerBg.vue";

export default {
  data() {
    return {
      data: "",
      tool_message: {
        title: "海量数据分析工具",
        tips: "开启个性化分析新体验",
        addition: "一个平台，所有的托管",
        buttonValue: "立即使用",
      },
      banner_msg: {
        tips: "登录查看更多工具",
        title: "我们的工具",
      },
    };
  },
  created() {
    request("/api/tools")
      .then((res) => {
        this.data = res.data;
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  components: { NavBar, Banner, Product, CenterBanner, Footer, BannerBg },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#content {
  height: 200px;
}
.koutu{
  width: 486px;
}
</style>
