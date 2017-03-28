import lazyLoading from '../lazyLoading'
import market from './market'

const state = {
  item:[
    {
      path :'/guidance/',
      component:lazyLoading('guidance',true),
      children:[
        market
      ]
    }
  ]
}

export default{
  state
}
