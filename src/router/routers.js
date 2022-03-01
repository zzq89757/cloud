import Vue from 'vue'
import Router from 'vue-router'
const Banner = () => import('@/components/banner/Banner')
const CenterBanner = () => import('@/components/banner/CenterBanner')
const Card = () => import('@/components/card/CardTable')
const Product = () => import('@/components/product/Product')
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
}, {
  path: '/product',
  name: 'product',
  meta: {
    title: 'product'
  },
  component: Product
}, {
  path: '/centerbanner',
  name: 'centerbanner',
  meta: {
    title: 'centerbanner'
  },
  component: CenterBanner
}]
export default childrouter;