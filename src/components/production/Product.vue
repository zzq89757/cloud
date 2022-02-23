<!--  -->
<template>
  <div class="pro">
<<<<<<< HEAD
    <product-item v-for="item in data" :key="item.title">
      <img slot="picture" :src="item.src" />
      <h5 slot="title">{{ item.title }}</h5>
      <p slot="content">{{ item.content }}</p>
=======
    <product-item v-for="item in jsondata" :key="item.title" :goods="item">
>>>>>>> a5ba3f59c97bda5d2a18c1b358efa86b344bd9d2
    </product-item>
    <h2>{{ data }}</h2>
  </div>
</template>

<script>
<<<<<<< HEAD
import ProductItem from "./ProductItem.vue";
import { request } from "@/network/axios";

export default {
  data() {
    return {
      data: "",
=======
// import jsondata from "@/assets/json/toolMsg.json";
import ProductItem from './ProductItem.vue';
export default {
  data() {
    return {
      // jsondata,
>>>>>>> a5ba3f59c97bda5d2a18c1b358efa86b344bd9d2
    };
  },props:{
    data:{
      type:Array,
      requied:false,
      default:[]
    }
  },
<<<<<<< HEAD
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
=======
  props:{
    jsondata:{
      type:Array,
      required:true,
    }
  },
  components: {ProductItem},
>>>>>>> a5ba3f59c97bda5d2a18c1b358efa86b344bd9d2

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
  background-image: "@/assets/img/onething.jpg";
}
</style>