<template>
  <div class="home">
    <!-- <div
      class="title"
      :style="{
        position: titlePositon,
        'background-color': titleColor,
        'border-bottom': titleBorder,
      }"
    ></div> -->
    <NavBar> </NavBar>
    <div class="content-item content1">
      <div class="main_content">
        <div class="word">
          <h2>诺唯赞生物信息云平台</h2>
          <p>一站式数据分析解决方案</p>
        </div>
        <button>立即使用</button>
      </div>
      <img src="@/assets/img/newbg.png" />
    </div>
    <!-- <div
      class="activebg firstbg"
      id="pic1"
      :style="{
        'background-position-x': positionX,
        'background-position-y': positionY1 + 'px',
      }"
    ></div> -->
    <div class="content-item content2">
      <div class="kouhao">
        <h2>我们的优势</h2>
      </div>
      <div class="main_card">
        <div class="card">
          <div>
            <h3>简单</h3>
            <h2>零代码实现生信分析</h2>
            <img src="@/assets/img/card/code.png" />
          </div>
        </div>
        <div class="card">
          <div>
            <h3>专业</h3>
            <h2>数目众多的生信分析工具</h2>
            <img src="@/assets/img/card/al.png" />
          </div>
        </div>
        <div class="card">
          <div>
            <h3>快速</h3>
            <h2>快速精准的分析结果</h2>
            <img src="@/assets/img/card/fast.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="activebg secondbg"
      id="pic2"
      :style="{
        'background-position-x': positionX,
        'background-position-y': positionY2 + 'px',
      }"
    ></div> -->
    <div class="content-item content3 kouhao">
      <div>
      <h2 style="display:block;margin-bottom:20px">目前使用人数</h2>
      <h2 v-countRunning :data-target='count' style="display:inline-block">0</h2>
      <h2 style="display:inline-block">+</h2>
      </div>
    </div>
    <!-- <div
      class="activebg thirdbg"
      id="pic3"
      v-bind:style="{
        'background-position-x': positionX,
        'background-position-y': positionY3 + 'px'
      }"
    ></div> -->
    <!-- <div class="content-item">内容4</div> -->
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "home",
  data() {
    return {
      ratio: 0.05,
      positionX: "50%",
      positionY1: 30,
      positionY2: 100,
      positionY3: 150,
      Y1: 0,
      Y2: 0,
      Y3: 0,
      titlePositon: "static",
      titleColor: "",
      titleBorder: "0",
      count:60000
    };
  },
  components: { NavBar, Footer },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.onload = () => {
      let pic1 = document.getElementById("pic1");
      let pic2 = document.getElementById("pic2");
      let pic3 = document.getElementById("pic3");
      this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
      this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
      this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio;
    };
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.positionY1 = this.Y1 - scrollTop * this.ratio;
      this.positionY2 = this.Y2 - scrollTop * this.ratio;
      this.positionY3 = this.Y3 - scrollTop * this.ratio;

      if (scrollTop > 750) {
        this.titlePositon = "fixed";
        this.titleColor = "rgba(0, 0, 0, 0.6)";
      } else {
        this.titlePositon = "static";
        this.titleColor = "transparent";
        this.titleBorder = "0";
      }
    },
  },
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
.title .item {
  height: 75px;
  line-height: 75px;
  width: 75px;
  text-align: center;
  font-size: 20px;
}
.title .logoLink {
  width: 106px;
  height: 75px;
  overflow: hidden;
  font-size: 0;
  background: transparent
    url(//sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png) no-repeat
    left 15px;
  margin-left: 300px;
}
.title .item:hover {
  background-color: #031032;
}
.circle {
  position: absolute;
  width: 100%;
  height: 52px;
  background: transparent
    url(https://sqimg.qq.com/qq_product_operations/im/2018/linearbot.png)
    repeat-x left top;
  text-align: center;
  z-index: 5;
  bottom: 0;
}
.content-item {
  text-align: center;
  font-weight: bold;
}
.content1 {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}
.content1 img {
  width: 612px;
  margin-top: 20px;
  height: 500px;
}
.main_content {
  width: 50%;
  margin-top: 50px;
  padding-right: 80px;
  position: relative;
}
.main_content h2 {
  font-size: 50px;
  font-weight: 300;
  margin: 20px;
}
.main_content p {
  margin: 45px;
  font-size: 30px;
  font-weight: 200;
}
.main_content button {
  margin: 43px;
  width: 200px;
  height: 60px;
  border-radius: 40px;
  outline: none;
  font-family: "Arial,PingfangSC,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif";
  font-size: 16px;
  color: #fff;
  background: #110d53;
  border: 1px solid #fff;
  transform: all 1s ease;
}
button:hover {
  background: #6b6b6b36;
  cursor: pointer;
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
.card {
  width: 380px;
  height: 380px;
  display: inline-block;
  background-color: rgba(87, 76, 252, 0.349);
  border-radius: 20px;
}
.card:hover {
  background-color: rgba(72, 59, 255, 0.664);
}
.card img {
  margin: 30px;
  width: 160px;
}
.content3 {
  height: 800px;
  position: relative;
  /* background-image: linear-gradient(#0b1061, #031032); */
  background: url("../assets/img/the world.png");
  background-size: cover;
}
.banner img {
  width: 500px;
}
.tim-content {
  position: relative;
  width: 100%;
  max-width: 1900px;
  min-width: 1000px;
  margin: 0 auto;
  height: 100%;
}
.qqpc {
  background: url(https://sqimg.qq.com/qq_product_operations/im/imbanner/20180201/pcqq_bg.jpg)
    no-repeat center center;
  background-size: cover;
}
.activebg {
  position: relative;
  width: 100%;
  height: 757px;
  background: #031032;
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
}
.firstbg {
  background-image: url("../assets/img/bg_11.jpg");
  background-size: cover;
  background-position: top left;
}
/* .activebg::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(50, 37, 238, 0.349);
} */
.secondbg {
  background-image: url("../assets/img/bg_2.jpg");
  background-size: cover;
}

</style>