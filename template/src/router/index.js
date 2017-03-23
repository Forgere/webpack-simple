import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Back from '../components/Back.vue'
import BackDetail from '../components/BackDetail.vue'
import Home from '../components/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/back',
      name: 'Back',
      component: Back,
      children: [{
        path: 'details',
        name: 'details',
        component: BackDetail
      }]
    }
  ],
  linkActiveClass: 'active'
})
