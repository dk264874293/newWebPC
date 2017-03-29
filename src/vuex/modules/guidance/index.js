import lazyLoading from '../lazyLoading'
import market from './market'
import commodity from './commodity'

const state = {
  item:[
    {
      path :'/guidance/',
      component:lazyLoading('guidance',true),
      children:[
        market,
        commodity
      ]
    }
  ]
}

export default{
  state
}
