var $ = window.$ = window.jQuery = require('jquery')
import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import Data from './components/Data'

$(window)
require('../static/bootstrap/js/bootstrap.min.js')
require('../static/plugins/slimScroll/jquery.slimscroll.min.js')
require('../static/plugins/fastclick/fastclick.js')
require('../static/dist/js/app.min.js')
require('../static/dist/js/demo.js')

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
  '/charts': {
    name: 'charts',
    component: Charts
  },
  '/timeline': {
    name: 'timeline',
    component: Timeline
  },
  '/data': {
    name: 'data',
    component: Data
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
