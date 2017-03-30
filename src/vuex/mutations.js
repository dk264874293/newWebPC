import * as type from './mutations-types'

export default{
  [type.RECORD_USERINFO](state,info){
    state.userInfo = info;
    state.login = true;
  }
}
