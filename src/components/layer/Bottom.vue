<!--  -->
<template>
  <div>
    <div class="container">
      <div class="dot">
        <img src="@/assets/img/layer/icon-circle@2x.png" alt class="icon-circle" />
        <img src="@/assets/img/layer/icon-circle-1@2x.png" alt class="icon-circle-3" />
        <img src="@/assets/img/layer/icon-circle-4@2x.png" alt class="icon-circle-4" />
        <div class="wave-box">
          <img src="@/assets/img/layer/wave.png" alt class="wave" />
          <div class="multi-dot">
            <img src="@/assets/img/layer/icon-circle-1@2x.png" alt class="icon-circle-1" />
            <img src="@/assets/img/layer/icon-circle-2@2x.png" alt class="icon-circle-2" />
          </div>
        </div>

        <img src="@/assets/img/layer/icon-piece@2x.png" alt class="icon-piece icon" />
      </div>
      <div class="background">
        <img src="@/assets/img/about/cover.png" class="bg" alt />
        <img src="@/assets/img/about/layer.png" class="layer" alt />
      </div>
      <div class="front">
        <transition name="pc1">
          <img src="@/assets/img/layer/img_5.png" class="computer" alt v-show="isShow" />
        </transition>
        <transition name="pc2">
          <div class="word" v-show="isShow">
            <CenterBanner :tips="'关于我们'" :title="'我们是谁'" class="title"></CenterBanner>
            <span>诺唯赞是一家围绕酶、抗原、抗体等功能性蛋白及高分子有机材料进行技术研发和产品开发的生物科技企业，依托于自主建立的关键共性技术平台，先后进入了生物科研、体外诊断、生物医药等业务领域，是国内少数同时具有自主可控上游技术开发能力和终端产品生产能力的研发创新型企业，智造“生物芯片”，为生物科技行业发展提供源动力。</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CenterBanner from "../banner/CenterBanner.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  components: { CenterBanner },

  computed: {},

  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 2200) {
        // 滚动到500时给卡片添加过渡效果 并移除滚动监听
        this.isShow = true;
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
  },
};
</script>
<style lang="css" scoped>
.pc1-enter-active {
  transition: all 0.6s ease-out;
}
.pc2-enter-active {
  transition: all 0.6s ease-out;
}
.pc1-leave-active {
  transition: all 2s cubic-bezier(0, -0.01, 0, 0.99) forwards;
}
.pc1-enter {
  transform: translateX(-160px);
  opacity: 1;
}
.pc2-enter {
  transform: translateX(160px);
  opacity: 0;
}
.container {
  height: 800px;
  background-color: var(--white);
  position: relative;
}
.bg {
  height: 100%;
  position: absolute;
  right: 0;
}
.front {
  width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.computer {
  width: 400px;
  height: 405px;
  z-index: 100;
}
.word {
  width: 400px;
  text-align: left;
}
.word span {
  color: var(--grey);
  letter-spacing: 0px;
}
.title {
  height: 140px;
  display: flex;
  align-items: flex-start;
  margin: 0;
}
.title p {
  margin: 0;
}
.icon {
  position: absolute;
  z-index: 9;
}
.icon-piece {
  left: 340px;
  bottom: 37px;
}
.dot {
  z-index: 2;
}
.wave-box {
  position: absolute;
  width: 145px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 396px;
  left: 0px;
  z-index: 2;
}
.multi-dot {
  display: inline-block;
  position: relative;
  z-index: 2;
}
.icon-circle {
  position: absolute;
  left: 23%;
  top: 15%;
  z-index: 2;
}
.icon-circle-4 {
  position: absolute;
  right: 45%;
  top: 47%;
  z-index: 2;
}
.icon-circle-1 {
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translateY(-50%) translateX(-50%);
}
.icon-circle-3 {
  position: absolute;
  bottom: 150px;
  left: 0px;
  transform: translateX(2600%);
  z-index: 2;
}
</style>
