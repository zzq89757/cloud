<template>
  <div class="home">
    <NavBar></NavBar>
    <Banner>
    </Banner>
    <CardTable></CardTable>
    <MiniCardTable></MiniCardTable>
    <Bottom></Bottom>
    <!-- <Count></Count> -->
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import CardTable from "@/components/card/CardTable";
import Count from "@/components/count/Count";
import CenterBanner from "../components/banner/CenterBanner";
import MiniCardTable from "../components/card/MiniCardTable";
import Bottom from "../components/layer/Bottom";
import BannerBg from "../components/banner/BannerBg.vue";
import LoginBox from "../components/box/LoginBox.vue";
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    NavBar,
    Footer,
    Banner,
    CardTable,
    Count,
    CenterBanner,
    MiniCardTable,
    Bottom,
    BannerBg,
    LoginBox
},
  methods: {
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  min-width: 1250px;
  height: 100%;
}
h2 {
  font-weight: 200;
}
h3 {
  font-size: 40px;
  font-weight: 300;
  margin: 20px;
}
</style>
