import Vue from 'vue'
import Vuex from 'vuex'
import guidance from './modules/guidance'

Vue.use(Vuex)

const store = {
  userInfo:{ //用户信息
    userName:null,
    token:null
  }

}

export default new Vuex.Store({
  store,
  modules:{
    guidance
  }
})
