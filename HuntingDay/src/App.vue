<template>
  <!-- Site wrapper -->
  <div class="wrapper">

    <c-header></c-header>

    <!-- =============================================== -->

    <c-main-sidebar></c-main-sidebar>

    <!-- =============================================== -->

    <router-view></router-view>

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
  }
}
</script>

