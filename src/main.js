import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
const route = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// document.title = "ass"