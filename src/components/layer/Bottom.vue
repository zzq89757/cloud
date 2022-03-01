<!--  -->
<template>
  <div>
    <div class="container">
      <img src="@/assets/img/about/cover.png" class="bg" alt=""/>
      <img src="@/assets/img/about/layer.png" class="layer" alt=""/>
      <img src="@/assets/img/layer/img_5.png" class="computer" alt="">
      <div class="word">
        <CenterBanner :tips="'关于我们'" :title="'我们是谁'" class="title"></CenterBanner>
        <span>
          诺唯赞是一家围绕酶、抗原、抗体等功能性蛋白及高分子有机材料进行技术研发和产品开发的生物科技企业，依托于自主建立的关键共性技术平台，先后进入了生物科研、体外诊断、生物医药等业务领域，是国内少数同时具有自主可控上游技术开发能力和终端产品生产能力的研发创新型企业，智造“生物芯片”，为生物科技行业发展提供源动力。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CenterBanner from "../banner/CenterBanner.vue";
export default {
  data () {
    return {
    };
  },

  components: { CenterBanner },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='css' scoped>
.container{
  height: 800px;
  background-color: var(--white);
  position: relative;
}
.bg{
  height: 100%;
  position: absolute;
  right: 0;
}
.layer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.computer{
  width: 400px;
  /* height: 405px; */
  position: absolute;
  bottom: 160px;
  left: 320px;
}
.word{
  width: 400px;
  position: absolute;
  right: 130px;
  bottom:320px;
  text-align: left;
}
.word span{
  color: var(--grey);
  letter-spacing: 0px;
}
.title{
  height: 140px;
  display: flex;
  align-items: flex-start;
  margin: 0;
}
.title p{
  margin: 0;
}
</style>