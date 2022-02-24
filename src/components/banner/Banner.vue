<!--  -->
<template>
  <div class="content-item content1">
    <div class="main_content">
      <div class="word">
        <slot name="title">
          <h2>{{message.title}}</h2>
        </slot>
        <slot name="tips">
          <p>{{message.tips}}</p>
        </slot>
      </div>
      <slot name="button">
        <button>{{message.buttonValue}}</button>
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
  },props:{
    message:{
      type:Object,
      required:false,
      default:{
        title:"诺唯赞生物信息云平台",
        tips:"一站式数据分析解决方案",
        buttonValue:"立即使用"
      }
    }
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
  padding-top: 100px;
  padding-bottom: 50px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  background: -webkit-radial-gradient(top right, ellipse, rgb(1, 1, 14), #070722, #0c0f60);
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