import Vue from 'vue'
import Vuex from 'vuex'
import guidance from './modules/guidance'

Vue.use(Vuex)

const item = []

const store = new Vuex.Store({
  state:{
    item
  },
  modules:{
    guidance
  }
})

export default store
