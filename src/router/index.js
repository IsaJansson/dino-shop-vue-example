require('bootstrap/dist/css/bootstrap.min.css');
import Vue from 'vue'
import Router from 'vue-router'
import Dinos from '@/components/Dinos'
import DinoDetails from '@/components/DinoDetails'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Dinos',
      component: Dinos
    },
    {
      path: '/dino/:id',
      name: 'DinoDetails',
      props: true,
      component: DinoDetails
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
