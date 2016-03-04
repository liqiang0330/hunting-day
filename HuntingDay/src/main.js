import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(Router)
Vue.use(Resource)

let router = new Router()

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/about': {
    name: 'about',
    component: About
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
