<!--  -->
<template>
  <div class="pro_container">
    <div class="pro">
      <product-item
        v-for="item in productList"
        :key="item.title"
        :product="item"
      >
      </product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  data() {
    return {};
  },
  props: {
    productList: {
      type: Array,
      requied: false,
      default: [],
    },
  },
  created() {},
  components: { ProductItem },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang="css" scoped>
.pro_container{
  width: 100%;
  background: var(--white);
  padding-bottom: 60px;
}
.pro {
  display: flex;
  background-color: var(--white);
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  background-image: "@/assets/img/onething.jpg";
}
</style>
