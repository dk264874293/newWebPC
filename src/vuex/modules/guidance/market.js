import lazyLoading from '../lazyLoading'

export default {
    path:'market',
    component:lazyLoading('guidance/market',true),
    children:[
      {
        path:'overview',
        component:lazyLoading('guidance/market/overview')
      },
      {
        path:'planning',
        component:lazyLoading('guidance/market/planning')
      },
      {
        path:'structure',
        component:lazyLoading('guidance/market/structure')
      }
    ]
}
