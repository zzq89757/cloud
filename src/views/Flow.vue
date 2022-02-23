<!--  -->
<template>
  <div>
    <NavBar></NavBar>
    <Banner>
      <h2 slot="title">专业的基因组学分析流程</h2>
      <p slot="tips">专业的基因组学分析流程</p>
    </Banner>
    <product-item v-for="item in data" :key="item.title">
      <img slot="picture" :src="item.src" />
      <h5 slot="title">{{ item.title }}</h5>
      <p slot="content">{{ item.content }}</p>
    </product-item>
    {{data}}
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";
import ProductItem from "@/components/production/ProductItem";
import { request } from "@/network/axios";
export default {
  data() {
    return {
      data:""
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
  components: { NavBar, Banner, ProductItem },

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
.pro {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1400px;
  margin: 0 auto;
}
</style>