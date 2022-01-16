<!--  -->
<template>
  <div class="content-item content1">
    <div class="main_content">
      <div class="word">
        <slot name="title">
          <h2>诺唯赞生物信息云平台</h2>
        </slot>
        <slot name="tips">
          <p>一站式数据分析解决方案</p>
        </slot>
      </div>
      <slot name="button">
        <button>立即使用</button>
      </slot>
    </div>
    <div>
      <slot name="img">
        <img src="@/assets/img/newbg.png" alt=""/>
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
<style scoped>
.content1 {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}
.content1 img {
  width: 612px;
  margin-top: 20px;
  height: 500px;
}
.main_content {
  width: 50%;
  margin-top: 50px;
  padding-right: 80px;
  position: relative;
}
.main_content h2 {
  font-size: 50px;
  font-weight: 300;
  margin: 20px;
}
.main_content p {
  margin: 45px;
  font-size: 30px;
  font-weight: 200;
}
.main_content button {
  margin: 43px;
  width: 200px;
  height: 60px;
  border-radius: 40px;
  outline: none;
  font-family: "Arial,PingfangSC,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif";
  font-size: 16px;
  color: #fff;
  background: #110d53;
  border: 1px solid #fff;
  transform: all 1s ease;
}
button:hover {
  background: #6b6b6b36;
  cursor: pointer;
}
</style>