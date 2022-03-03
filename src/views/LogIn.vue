<!--  -->
<template>
  <div class="page">
    <NavBar> </NavBar>
    <Banner> 
      <LoginBox slot="main"></LoginBox>
    </Banner>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Banner from "../components/banner/Banner.vue";
import LoginBox from "../components/box/LoginBox.vue";
export default {
  data() {
    return {};
  },

  components: { NavBar, Footer, Banner, LoginBox },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped></style>
