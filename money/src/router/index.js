import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/add/payment/:category/', 
    component: () => import(/* webpackChunkName: "about" */ '../views/AutoPayment.vue'),
    props: (route) => ({ value: route.query.sum }) 
  },
  // {
  //   path: '/add/payment/:category/:sum',
  //   name: 'Home',
  //   component: Home
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
