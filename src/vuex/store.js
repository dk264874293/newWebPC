import Vue from 'vue'
import Vuex from 'vuex'
import guidance from './modules/guidance'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  userInfo:{ //用户信息
    userName:null,
    token:null,
    phone:''
  },
  login: false
}

export default new Vuex.Store({
  state,
  mutations
})
