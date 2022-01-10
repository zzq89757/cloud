import Vue from 'vue'
import Router from 'vue-router'
const Banner = () => import('@/components/banner/Banner')
const Card = () => import('@/components/card/CardTable')
Vue.use(Router)
const childrouter = [{
  path: '/card',
  name: 'card',
  meta: {
    title: 'card'
  },
  component: Card
}, {
  path: '/banner',
  name: 'banner',
  meta: {
    title: 'banner'
  },
  component: Banner
}]
export default childrouter;