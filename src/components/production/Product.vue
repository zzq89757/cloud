<!--  -->
<template>
  <div class="pro">
    <product-item v-for="item in data" :key="item.title">
      <img slot="picture" :src="item.src" />
      <h5 slot="title">{{ item.title }}</h5>
      <p slot="content">{{ item.content }}</p>
    </product-item>
    <h2>{{ data }}</h2>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { request } from "@/network/axios";

export default {
  data() {
    return {
      data: "",
    };
  },props:{
    data:{
      type:Array,
      requied:false,
      default:[]
    }
  },
  created() {
    request("/api/product").then(
      (res) => {
        this.data = res.data;
        console.log(res);
      },
      (err) => console.log(err)
    );
  },
  components: { ProductItem },

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.pro {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1400px;
  margin: 0 auto;
}
</style>