<!--  -->
<template>
  <!-- 左边文字内容 -->
  <div class="content-item content1">
    <banner-bg></banner-bg>
    <slot name="main">
      <transition name="font-in">
        <div class="main_content" v-show="show">
          <div class="word mini">
            <p>{{ message.addition }}</p>
          </div>
          <div class="word">
            <h2>{{ message.title }}</h2>
          </div>
          <div class="word">
            <p>{{ message.tips }}</p>
          </div>
          <button>{{ message.buttonValue }}</button>
        </div>
      </transition>

      <!-- 右边图片内容 -->
      <transition name="slide-fade">
        <div v-if="show">
          <slot name="img">
            <img src="@/assets/img/banner/cloud_server.png" alt />
          </slot>
        </div>
      </transition>
    </slot>
  </div>
</template>

<script>
import BannerBg from "./BannerBg.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  activated(){
    this.show = true;
    console.log("has been activated");
  },
  deactivated(){
    this.show = false;
  },
  props: {
    message: {
      type: Object,
      required: false,
      default: {
        title: "诺唯赞生物信息云平台",
        tips: "一站式数据分析解决方案",
        addition: "一个平台，所有的托管",
        buttonValue: "立即使用",
      },
    },
  },
  created() {},
  components: { BannerBg },

  computed: {},

  mounted() {
    
  },
  methods: {},
};
</script>
<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.font-in-enter-active {
  transition: all 0.8s ease;
}
.font-in-leave-active {
  transition: all 0.6s ease;
}
.font-in-enter,
.font-in-leave-to {
  opacity: 0;
}
.content1 {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 473px;
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
</style>
