import lazyLoading from '../lazyLoading'

const state = {
  item:[
    {
      path :'/details/',
      component:lazyLoading('details',true),
      children:[

      ]
    }
  ]
}

export default {
  state
}
