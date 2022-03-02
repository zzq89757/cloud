<!--  -->
<template>
  <div class="cardtab">
    <img src="@/assets/img/cover/cover1.png" alt class="cover1 cover" />
    <img src="@/assets/img/cover/cover2.png" alt class="cover2 cover" />
    <CenterBanner></CenterBanner>
    <div class="main_card">
      <Card
        :title="item.title"
        :tips="item.tips"
        :imgSrc="item.url"
        v-for="item in Img"
        :key="item.name"
      ></Card>
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
    };
  },

  components: { Card, CenterBanner },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
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
  justify-content: space-around;
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