<!-- s -->
<template>
  <div>
    <div  class="product_box">
        <img :src="goods.src" alt=""/>
        <h5>{{goods.title}}</h5>
        <p>{{goods.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
    goods:{
      type:Array,
      required:true,
      default:[{
        src:"http://localhost/img/logo_white_nopadding.7908cbcf.png",
        title:"vazyme",
        content:"just do it"
      }]
    }
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.product_box {
  width: 240px;
  height: 360px;
  background-color: #fff;
  color: black;
  display: inline-block;
  margin:24px;
}
img {
  width: 100%;
}
</style>