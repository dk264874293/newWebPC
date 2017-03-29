import lazyLoading from '../lazyLoading'
import market from './market'
import commodity from './commodity'
import operating from './operating'

const state = {
  item:[
    {
      path :'/guidance/',
      component:lazyLoading('guidance',true),
      children:[
        market,
        commodity,
        operating
      ]
    }
  ]
}

export default{
  state
}
