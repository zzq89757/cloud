<!--  -->
<template>
  <div>
    <NavBar>     
    </NavBar>
    <Banner :message="flow_message">
      <img slot="img" src="@/assets/img/banner/flow.png" alt="" class="banner_right"/>
    </Banner>
    <CenterBanner style="background-color:white" :tips="banner_msg.tips" :title="banner_msg.title"></CenterBanner>
    <Product :productList="data"> </Product>
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
export default {
  data() {
    return {
      data: "",
      flow_message:{
        title: "专业的基因组学分析流程",
        tips: "一键流程自动化分析",
        addition: "一个平台，所有的托管",
        buttonValue: "立即使用",
      },banner_msg:{
        tips:"登录查看更多流程",
        title:"我们的流程"
      }
    };
  },
  created() {
    request("/api/flow")
      .then((res) => {
        this.data = res.data;
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
  components: { NavBar, Banner, Product, CenterBanner, Footer },

  //   computed: {},

  //   mounted: {},

  //   methods: {}
};
</script>
<style scoped>
#content {
  display: flex;
}
.title {
  width: 50%;
  display: inline-block;
}
.picture {
  width: 50%;
  height: 200px;
  display: inline-block;
}
.banner_right{
  width: 486px;
}
</style>