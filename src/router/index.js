import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import moduleGuidance from '../vuex/modules/guidance'
import moduleFollow from '../vuex/modules/follow'
import moduleUser from '../vuex/modules/user'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      redirect: '/guidance/market/overview'
     },
     ...generateRoutesFromMenu(moduleGuidance.state.item),
     ...generateRoutesFromMenu(moduleFollow.state.item),
     ...generateRoutesFromMenu(moduleUser.state.item),
      {
        path:'/login',
        name:'login',
        component:login
      }
  ]
})

function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
