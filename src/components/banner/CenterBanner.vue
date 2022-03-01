<!--  -->
<template>
  <div class="kouhao">
    <p :style="{ color: isBlue.tipscolor }">——&nbsp&nbsp {{ tips }} &nbsp&nbsp——</p>
    <h2 :style="{ color: isBlue.titlecolor }">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whiteStyle: {
        backgroundColor: "var(--white)",
        tipscolor: "var(--grey)",
        titlecolor: "var(--blue)"
      },
      blueStyle: {
        backgroundColor: "var(--blue)",
        tipscolor: "var(--white)",
        titlecolor: "var(--white)"
      }
    };
  },

  props: {
    tips: {
      type: String,
      require: false,
      default: "我们的优势"
    },
    title: {
      type: String,
      require: false,
      default: "为什么选择我们"
    },
    mainstyle: {
      type: String,
      require: false,
    }
  }, computed: {
    isBlue() {
      return this.mainstyle === "blue" ? this.blueStyle : this.whiteStyle;
    }
  },
}

</script>
<style lang='css' scoped>
.kouhao {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h2 {
  display: inline-block;
  color: var(--white);
  font-size: 36px;
  font-weight: 200;
}
p {
  color: var(--white);
  margin: 14px 0 ;
}
</style>