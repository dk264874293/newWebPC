import lazyLoading from '../lazyLoading'

export default {
    path:'operating',
    component:lazyLoading('guidance/operating',true),
    children:[
      {
        path:'monitoring',
        component:lazyLoading('guidance/operating/monitoring')
      },
      {
        path:'optimize',
        component:lazyLoading('guidance/operating/optimize')
      },
      {
        path:'warning',
        component:lazyLoading('guidance/operating/warning')
      }
    ]
}
