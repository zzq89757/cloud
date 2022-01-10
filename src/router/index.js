import Vue from 'vue'
import Router from 'vue-router'
import childrouter from './routers'
const Home = () => import('@/views/Home')
const LogIn = () => import('@/views/LogIn')
const SignUp = () => import('@/views/SignUp')
const About = () => import('@/views/About')
const Flow = () => import('@/views/Flow')
const Tools = () => import('@/views/Tools')

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: LogIn
  }, {
    path: '/signup',
    name: 'signup',
    meta: {
      title: '注册'
    },
    component: SignUp
  }, {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于'
    },
    component: About
  }, {
    path: '/index_server',
    name: 'index_server',
    meta: {
      title: '工具'
    },
    component: Tools
  }, {
    path: '/index_flow',
    name: 'flow',
    meta: {
      title: '流程'
    },
    component: Flow
  },
  ...childrouter
]

const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  // linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title;
  document.title = "诺唯赞生物信息云平台";
  next();
})
export default router;