import Vue from 'vue'
import VueRouter from 'vue-router'
import SuppliersView from "@/views/SuppliersView";


Vue.use(VueRouter)

const routes = [
    {
    path: '/supplier',
    name: 'supplier',
    component: SuppliersView
  },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MapView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
