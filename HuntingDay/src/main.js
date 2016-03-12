import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Charts from './components/Charts'
import Timeline from './components/Timeline'
import Data from './components/Data'
import Test from './services/test'
Test.test1()

const ipcRenderer = require('electron').ipcRenderer
console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))

// vue-infinite-scroll
import InfiniteScroll from 'vue-infinite-scroll'
import $ from 'jquery'
$(window)

// import jetpack from 'fs-jetpack'

// setting
import setting from './setting'
console.log(setting.blogTitle)

// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

Vue.use(Router)
Vue.use(Resource)
Vue.use(InfiniteScroll)

let router = new Router()

router.map({
  '/': {
    name: 'home',
    component: Home,
    setting
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
