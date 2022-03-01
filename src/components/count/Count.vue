<!--  -->
<template>
  <div class="count">
    <div>
      <h2 style="display: block; margin-bottom: 20px">目前使用人数</h2>
      <h2 v-countRunning :data-target="count">
        0
      </h2>
      <h2 style="display: inline-block">+</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 60000,
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='css' scoped>
.count {
  height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../assets/img/the world.png");
  background-size: cover;
}
h2 {
  display: inline-block;
  font-size: 40px;
  font-weight: 200;
  color: #01237c;
}
</style>