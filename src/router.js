import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Registration from './views/registration'
import Photos from './views/photos'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'registration',
      path: '/registration',
      component: Registration,
    },
    {
      name: 'photos',
      path: '/photos',
      component: Photos,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
