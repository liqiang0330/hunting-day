<template>
  <!-- Site wrapper -->
  <div class="wrapper">

    <c-header></c-header>

    <!-- =============================================== -->

    <c-main-sidebar></c-main-sidebar>

    <!-- =============================================== -->
    <div class="content-wrapper">
      <div class="slimScrollDiv1">
        <router-view></router-view>
      </div>
    </div>

    <c-footer></c-footer>

    <c-control-sidebar></c-control-sidebar>
    
  </div>

</template>

<script>
import CHeader from './components/Header'
import CMainSidebar from './components/MainSidebar'
import CFooter from './components/Footer'
import CControlSidebar from './components/ControlSidebar'

export default {
  components: {
    CHeader,
    CMainSidebar,
    CFooter,
    CControlSidebar
  },
  ready () {
    var $ = window.$ = window.jQuery = require('jquery')
    $(window)
    require('../static/bootstrap/js/bootstrap.min.js')
    require('../static/plugins/slimScroll/jquery.slimscroll.min.js')
    require('../static/plugins/fastclick/fastclick.js')
    require('../static/dist/js/app.js')
    require('../static/dist/js/demo.js')
  }
}
</script>

