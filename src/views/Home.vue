<template>
  <div class="home">
    <NavBar></NavBar>
    <Banner></Banner>
    <div class="content2">
      <div class="kouhao">
        <h2>我们的优势</h2>
      </div>
      <div class="main_card">
        <Card :title='item.title' :tips='item.tips' v-for="item in Img" :key="item.name">
          <img slot="img" :src="item.url">
        </Card>
      </div>
    </div>
    <div class="content3 kouhao">
      <div>
        <h2 style="display: block; margin-bottom: 20px">目前使用人数</h2>
        <h2 v-countRunning :data-target="count" style="display: inline-block">
          0
        </h2>
        <h2 style="display: inline-block">+</h2>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Card from '@/components/card/Card';
export default {
  name: "home",
  data() {
    return {
      count: 60000,
      Img:[{
        name:"card1",
        title:"简单",
        tips:"零代码实现生信分析",
        url:require(`../assets/img/card/card1.png`)
      },{
        name:"card2",
        title:"专业",
        tips:"数目众多的生信分析工具",
        url:require(`../assets/img/card/card2.png`)
      },{
        name:"card3",
        title:"快速",
        tips:"快速准确的分析结果",
        url:require(`../assets/img/card/card3.png`)
      }]
    };
  },
  components: { NavBar, Footer, Banner,Card },
  methods: {},
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
.content2 {
  height: 800px;
  background-image: url("../assets/img/onething.jpg");
  background-size: cover;
  background-position-x: -700px;
}
.kouhao {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kouhao h2 {
  display: inline-block;
  font-size: 40px;
  font-weight: 200;
}
.main_card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  margin: 0px auto;
}
.content3 {
  height: 800px;
  position: relative;
  background: url("../assets/img/the world.png");
  background-size: cover;
}
</style>