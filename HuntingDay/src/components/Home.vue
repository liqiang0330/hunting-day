<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>150</h3>

              <p>{{ $route.setting.blogTitle }}</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a v-link="{ path: '/about' }" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>53<sup style="font-size: 20px">%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>
      <!-- /.row -->
      <!-- Main row -->
      <div class="row">

        <div class="col-md-12">
          <div class="box box-primary">
            <div class="box-header">
              <i class="fa fa-edit"></i>

              <h3 class="box-title">Buttons</h3>
            </div>
            <div class="box-body pad table-responsive">
              <p>Various types of buttons. Using the base class <code>.btn</code></p>
              <table class="table table-bordered text-center">
                <tbody><tr>
                  <th>Normal</th>
                  <th>Large <code>.btn-lg</code></th>
                  <th>Small <code>.btn-sm</code></th>
                  <th>X-Small <code>.btn-xs</code></th>
                  <th>Flat <code>.btn-flat</code></th>
                  <th>Disabled <code>.disabled</code></th>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-default" @click="test()">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-lg" @click="gotoAbout()">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-sm">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-xs">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-flat">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default disabled">Default</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-primary">Primary</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-primary btn-lg">Primary</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-primary btn-sm">Primary</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-primary btn-xs">Primary</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-primary btn-flat">Primary</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-primary disabled">Primary</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-success">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-lg">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-sm">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-xs">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-flat">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success disabled">Success</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-info">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-lg">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-sm">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-xs">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-flat">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info disabled">Info</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-danger">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-lg">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-sm">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-xs">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-flat">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger disabled">Danger</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-warning">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-lg">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-sm">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-xs">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-flat">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning disabled">Warning</button>
                  </td>
                </tr>
              </tbody></table>
            </div>
            <!-- /.box -->
          </div>
        </div>

      </div>
      <!-- /.row (main row) -->

      <div class="row">
        <div class="quote-wrapper">
          <h2>Random Quote</h2>
          <p>
            {{ quote }}
          </p>
        </div>
      </div>

      <div class="row">
        <div  style="height: 1200px;background-color: #ccc;width: 400px;margin: 0 auto;" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          ...
        </div>
      </div>

    </section>
</template>

<style>

.quote-wrapper {
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
  padding: 2em;
  border: solid 1px $grey2;
  margin-top: 1em;
}
</style>

<script>
import QuoteService from '../services/quote'
var count = 0

export default {
  data () {
    return {
      msg: 'Hello World!',
      items: [],
      quote: '',
      data: [],
      busy: false
    }
  },
  methods: {
    test () {
      console.log('test!')
    },
    gotoAbout () {
      // router.go('/about')
    },
    loadMore () {
      this.busy = true

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ })
        }
        this.busy = false
      }, 1000)
    }
  },
  ready () {
    var $ = window.$ = window.jQuery = require('jquery')
    $(window)
    // require('../../static/plugins/datepicker/datepicker3.css')
    require('moment')
    require('../../static/plugins/daterangepicker/daterangepicker.js')

    // let random = Math.floor(Math.random() * 6)
    QuoteService.getQuote(this).then((response) => {
      this.$set('quote', response.data[0].content)
    }, (response) => {
      console.log(response)
    })
  }
}
</script>
