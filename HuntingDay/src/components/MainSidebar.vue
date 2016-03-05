<template>
  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../static/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online 11111111111</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">主导航</li>        
        <li>
          <a v-link="{ path: '/' }">
            <i class="fa fa-pie-chart"></i> <span>全景图</span>            
          </a>
        </li>
        <li>
          <a v-link="{ path: '/timeline' }">
            <i class="fa fa-circle-o"></i> <span>信息流</span>            
          </a>
        </li>
        <li>
          <a v-link="{ path: '/charts' }">
            <i class="fa fa-pie-chart"></i> <span>图表</span>            
          </a>
        </li>        
        <li>
          <a v-link="{ path: '/data' }">
            <i class="fa fa-circle-o"></i> <span>数据</span>            
          </a>
        </li>
        <li>
          <a v-link="{ path: '/about' }">
            <i class="fa fa-pie-chart"></i> <span>关于</span>            
          </a>
        </li>       
        
        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>
