<!--  -->
<template>
  <div class="card">
    <div>
      <h3>{{title}}</h3>
      <h2>{{tips}}</h2>
      <slot name="img">
      <img src="../../assets/img/card/card1.png" alt=""/>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
  props:{
    title:{
      type:String,
      require:true,
      default:"快速"
    },
    tips:{
      type:String,
      require:true,
      default:"快速准确的分析结果"
    }
  }
};
</script>
<style lang='css' scoped>
h3 {
  font-size: 40px;
  font-weight: 300;
  margin: 30px;
}
.card {
  width: 320px;
  height: 320px;
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
</style>