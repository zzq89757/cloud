<!--  -->
<template>
  <div class="cardtab">
    <CenterBanner></CenterBanner>
    <img src="@/assets/img/cover/cover1.png" alt class="cover1 cover" />
    <img src="@/assets/img/cover/cover2.png" alt class="cover2 cover" />
    <div class="main_card" >
      <transition name="card" v-for="item in Img" :key="item.name">
        <Card
          :title="item.title"
          :tips="item.tips"
          :imgSrc="item.url"
          v-show="isShow"
          
        ></Card>
      </transition>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card/Card";
import CenterBanner from "../banner/CenterBanner.vue";
export default {
  data() {
    return {
      Img: [
        {
          name: "card1",
          title: "简单",
          tips: "零代码实现生信分析",
          url: require(`../../assets/img/card/time.png`),
        },
        {
          name: "card2",
          title: "专业",
          tips: "数目众多的生信分析工具",
          url: require(`../../assets/img/card/safe.png`),
        },
        {
          name: "card3",
          title: "快速",
          tips: "快速准确的分析结果",
          url: require(`../../assets/img/card/support.png`),
        },
      ],
      isShow: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  components: { Card, CenterBanner },

  computed: {},

  mounted: {},

  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 550) {
        // 滚动到500时给卡片添加过渡效果 并移除滚动监听
        this.isShow = true;
        window.removeEventListener("scroll",this.handleScroll);
      }
    },
  },
};
</script>
<style lang="css" scoped>
.card-enter-active {
  transition: all .6s ease;
  transition: all 2s cubic-bezier(0, -0.01, 0, 0.99) forwards;
}
.card-leave-active {
  transition: all 0.6s ease;
}
.card-enter,
.card-leave-to {
  transform: translateY(100px) scale(.6);
  opacity: 0;
}
.cardtab {
  width: 100%;
  height: 800px;
  position: relative;
  background-color: var(--white);
  background-size: cover;
}
.main_card {
  width: var(--content-size);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  margin: auto;
}
.card {
  z-index: 1;
}
.cover {
  position: absolute;
}
.cover1 {
  top: 0;
  left: 0;
}
.cover2 {
  width: 326px;
  bottom: 0;
  left: 0;
}
</style>
