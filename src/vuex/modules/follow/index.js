import lazyLoading from '../lazyLoading'

const state = {
  item:[
    {
      path :'/follow/',
      component:lazyLoading('follow',true),
      children:[
        {
          path:'commodity',
          component:lazyLoading('follow/commodity')
        },
        {
          path:'element',
          component:lazyLoading('follow/element')
        },
        {
          path:'store',
          component:lazyLoading('follow/store')
        }
      ]
    }
  ]
}

export default {
  state
}
