<!-- s -->
<template>
  <div class="product_box" @click="jump(product.href)">
    <img :src="product.src" />
    <h4>{{ product.title }}</h4>
    <p>{{ product.content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
      default: [
        {
          src: "http://localhost/img/logo_white_nopadding.7908cbcf.png",
          title: "vazyme",
          content: "just do it",
        },
      ],
    },
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {
    jump(href) {
      window.open(href);
    },
  },
};
</script>
<style lang='css' scoped>
.product_box {
  width: 250px;
  height: 335px;
  background-color: #fff;
  position: relative;
  color: black;
  display: inline-block;
  margin: 24px 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.product_box h4 {
  font-size: 18px;
  font-weight: 200;
}
.product_box p {
  font-size: 14px;
  margin: 20px;
}
img {
  height: 68%;
  border-radius: 4px;
  position: relative;
}
.product_box::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(107, 107, 107, 0.37);
  transform: scaleX(1);
  transition: 0.2s linear all;
}
.product_box:hover::after {
  background-color: #6b6b6b00;
  transform: scaleX(1);
}
</style>