<!--  -->
<template>
  <div class="banner">
    <img class="banner1" src="@/assets/img/banner/banner.png" />
    <img class="banner2" src="@/assets/img/banner/banner-1.png" />
    <div class="content-item content1">
      <div class="main_content">
        <div class="word mini">
          <slot name="title">
            <p>{{ message.addition }}</p>
          </slot>
        </div>
        <div class="word">
          <slot name="title">
            <h2>{{ message.title }}</h2>
          </slot>
        </div>
        <div class="word">
          <slot name="tips">
            <p>{{ message.tips }}</p>
          </slot>
        </div>

        <slot name="button">
          <button>{{ message.buttonValue }}</button>
        </slot>
      </div>
      <div>
        <slot name="img">
          <img src="@/assets/img/banner/cloud_server.png" alt />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }, props: {
    message: {
      type: Object,
      required: false,
      default: {
        title: "诺唯赞生物信息云平台",
        tips: "一站式数据分析解决方案",
        addition: "一个平台，所有的托管",
        buttonValue: "立即使用"
      }
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style scoped>
.banner{
  height: 765px;
}
.content1 {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding-top: 126px;
  padding-bottom: 96px;
}
.content1 img {
  width: 480px;
  height: 473px;
}
.main_content {
  display: flex;
  width: 50%;
  margin: 62px 0px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.main_content h2 {
  font-size: 45px;
  font-weight: 300;
}
.main_content p {
  font-size: 30px;
  font-weight: 200;
}
.main_content button {
  width: 180px;
  height: 50px;
  display: inline-block;
  text-align: center;
  color: #fdfeff;
  background-image: linear-gradient(30deg, #007ccd 3.1%, #08cbff 100%);
  border-radius: 3px;
  line-height: 48px;
  font-size: 18px;
  outline: none;
  border: none;
  transform: all 1s ease;
}
button:hover {
  background-image: linear-gradient(90deg, #007ccd 4%, #08cbff 100%);
  cursor: pointer;
}
.content1 .main_content .mini p {
  font-size: 20px;
  font-weight: 200;
}
.banner1 {
  position: absolute;
  top: -4%;
  left: 0;
  width: 67%;
  z-index:-100;
}
.banner2 {
  position: absolute;
  right: 0;
  bottom: -67px;
}
</style>