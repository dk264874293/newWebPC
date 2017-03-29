import lazyLoading from '../lazyLoading'

export default {
    path:'commodity',
    component:lazyLoading('guidance/commodity',true),
    children:[
      {
        path:'element',
        component:lazyLoading('guidance/commodity/element')
      },
      {
        path:'space',
        component:lazyLoading('guidance/commodity/space')
      },
      {
        path:'chooseModel',
        component:lazyLoading('guidance/commodity/chooseModel')
      }
    ]
}
