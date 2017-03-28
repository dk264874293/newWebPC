import lazyLoading from '../lazyLoading'

export default {
    path:'market',
    component:lazyLoading('guidance/market',true),
    children:[
      {
        path:'navOneOne',
        component:lazyLoading('guidance/market/navOneOne')
      },
      {
        path:'navOneTwo',
        component:lazyLoading('guidance/market/navOneTwo')
      },
      {
        path:'navOneThree',
        component:lazyLoading('guidance/market/navOneThree')
      }
    ]
}
