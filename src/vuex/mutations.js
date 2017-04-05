import * as type from './mutations-types'
//事件管理
export default{
  [type.RECORD_USERINFO](state,info){
    state.userInfo = info;
    state.login = true;
  }
}
