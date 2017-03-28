// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router'
import iView from 'iview'
import echarts from 'echarts'
import './assets/css/main.css'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.prototype.echarts = echarts

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app');
