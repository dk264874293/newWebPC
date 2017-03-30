import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from '../vuex/modules/lazyLoading'

import moduleGuidance from '../vuex/modules/guidance'
import moduleFollow from '../vuex/modules/follow'
import moduleUser from '../vuex/modules/user'
import moduleDetails from '../vuex/modules/details'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/guidance/market/overview'
     },
     ...generateRoutesFromMenu(moduleGuidance.state.item),
     ...generateRoutesFromMenu(moduleFollow.state.item),
     ...generateRoutesFromMenu(moduleUser.state.item),
     ...generateRoutesFromMenu(moduleDetails.state.item),
      {
        path:'/login',
        name:'login',
        meta: {
          requireAuth: false,  //不需要登录
        },
        component:lazyLoading('login')
      },
      {
        path:'/signIn',
        name:'signIn',
        meta: {
          requireAuth: false,  //不需要登录
        },
        component:lazyLoading('signIn')
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
