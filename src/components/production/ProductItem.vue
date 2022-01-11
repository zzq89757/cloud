<!--  -->
<template>
  <div>
    <div  class="product_box">
      <slot name="picture">
        <img />
      </slot>
      <slot name="title">
        <h5>标题</h5>
      </slot>
      <slot name="content">
        <p>内容</p>
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