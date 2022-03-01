<!--  -->
<template>
  <div class="card">
    <div>
      <h3>{{title}}</h3>
      <img :src="imgSrc" alt=""/>
      <h2>{{tips}}</h2>
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
    },
    imgSrc:{
      type:String,
      require:true
    }
  }
};
</script>
<style lang='css' scoped>
h3 {
  margin: 30px;
  color:var(--blue);
  font-size: 40px;
  font-weight: 300;
}
h2{
  color: var(--grey);
}
.card {
  width: 320px;
  height: 320px;
  display: inline-block;
  /* background-color: rgba(87, 76, 252, 0.349); */
  border-radius: 20px;
}

.card img {
  margin: 30px;
  width: 160px;
  height:120px;
}
</style>