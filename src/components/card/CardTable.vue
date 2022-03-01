<!--  -->
<template>
  <div class="cardtab">
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
import Card from '@/components/card/Card';
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

  components: { Card },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.cardtab {
  height: 800px;
  background-color: var(--white);
  background-size: cover;
  background-position-x: -700px;
  
}
.main_card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  margin:  auto;
}


</style>