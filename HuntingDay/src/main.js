import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Charts from './components/Charts'

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
  },
  'charts': {
    name: 'charts',
    component: Charts
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
