import Vue from 'vue'
import Vuex from 'vuex'
import guidance from './modules/guidance'

Vue.use(Vuex)

const store = {
  items : [],
}

export default new Vuex.Store({
  store,
  modules:{
    guidance
  }
})
