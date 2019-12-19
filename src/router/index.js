import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import APP from '../App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Lts from '../components/Lts.vue'
import Fkui from '../components/Fkui.vue'
import My from '../components/My.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Lts
  },
  {
    path: '/Lts',
    name: 'Lts',
    component: Lts
  },
  {
    path: '/Fkui',
    name: 'Fkui',
    component: Fkui
  },
  {
    path: '/My',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
