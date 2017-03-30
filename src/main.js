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

router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth != false && !store.state.login) {
        next({
            path: '/login/'
        });
    }
    else{
        next(); //判断该路由是否需要登录权限
    }
});


Vue.prototype.echarts = echarts

new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app');
