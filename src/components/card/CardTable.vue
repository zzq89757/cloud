<!--  -->
<template>
  <div class="cardtab">
    <div class="kouhao">
      <p>——  &nbsp &nbsp我们的优势  &nbsp&nbsp——</p>
      <h2>为什么选择我们</h2>
    </div>
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
  margin: 10px auto;
}
.kouhao {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h2 {
  display: inline-block;
  color: #183788;
  font-size: 40px;
  font-weight: 200;
}
p {
  color: var(--grey);
  margin: 10px;
}
</style>