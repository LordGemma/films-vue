import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films/:id',
      name: 'films',
      component: () => import('./views/Film.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
