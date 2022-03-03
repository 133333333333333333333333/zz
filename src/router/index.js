import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
// const City = () => import('../components/City.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/city/:city",
    name: 'City',
    component: () => import('../components/City.vue'),
    props: true
  },
  // {
  //   path: '/topic',
  //   name: 'Topic',
  //   component: () => import('../views/Topic.vue')
  // },
  // {
  //   path: '/mine',
  //   name: 'Mine',
  //   component: () => import('../views/Mine.vue')
  // },
  // {
  //   path: '/search',
  //   name: 'Search',
  //   component: () => import('../views/Search.vue')
  // },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
