<!--  -->
<template>
  <div>
    <NavBar></NavBar>
    <Banner>
      <h2 slot="title">专业的基因组学分析流程</h2>
      <p slot="tips">专业的基因组学分析流程</p>
    </Banner>
    <Product :productList="data"> </Product>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";
import Product from "@/components/production/Product";
import { request } from "@/network/axios";
export default {
  data() {
    return {
      data: "",
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
  components: { NavBar, Banner, Product },

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
</style>