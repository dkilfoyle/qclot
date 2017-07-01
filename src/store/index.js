import Vue from 'vue'
import Vuex from 'vuex'

// import * as mutations from './mutations'
// import * as actions from './actions'
// import * as getters from './getters'
// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bOnsetTime: false,
    bPatientCriteria: false,
    bStart: false
  },
  getters: {
    bOnsetTime: state => state.bOnsetTime,
    bPatientCriteria: state => state.bPatientCriteria,
    bStart: state => state.bStart
  },
  mutations: {
    setOnsetTimeStatus (state, status) {
      state.bOnsetTime = status
    },
    setPatientCriteriaStatus (state, status) {
      state.bPatientCriteria = status
    },
    setStartStatus (state, status) {
      state.bStart = status
    }
  },
  actions: {
    doStart (context) {
      context.commit('setOnsetTimeStatus', false)
      context.commit('setPatientCriteriaStatus', false)
      context.commit('setStartStatus', true)
    }
  }
})
