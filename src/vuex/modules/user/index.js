import lazyLoading from '../lazyLoading'

const state = {
  item:[
    {
      path :'/user/',
      component:lazyLoading('user',true),
      children:[
        {
          path:'userInfo',
          component:lazyLoading('user/userInfo')
        },
        {
          path:'passwordChange',
          component:lazyLoading('user/passwordChange')
        },
        {
          path:'phoneChange',
          component:lazyLoading('user/phoneChange')
        },
        {
          path:'order',
          component:lazyLoading('user/order')
        }
      ]
    }
  ]
}

export default {
  state
}
