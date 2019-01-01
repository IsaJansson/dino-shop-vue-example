import Vue from 'vue'
import Router from 'vue-router'
import Dinos from '@/components/Dinos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dinos',
      component: Dinos
    }
  ]
})
