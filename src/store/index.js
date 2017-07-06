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
    bScanCriteria: false,
    bStart: false,
    iDuration: -100
  },
  getters: {
    bOnsetTime: state => state.bOnsetTime,
    bPatientCriteria: state => state.bPatientCriteria,
    bScanCriteria: state => state.bScanCriteria,
    bStart: state => state.bStart,
    iDuration: state => state.iDuration
  },
  mutations: {
    setOnsetTimeStatus (state, status) {
      state.bOnsetTime = status
    },
    setPatientCriteriaStatus (state, status) {
      state.bPatientCriteria = status
    },
    setScanCriteriaStatus (state, status) {
      state.bScanCriteria = status
    },
    setStartStatus (state, status) {
      state.bStart = status
    },
    setDuration (state, duration) {
      state.iDuration = duration
    }
  },
  actions: {
    doStart (context) {
      context.commit('setOnsetTimeStatus', false)
      context.commit('setPatientCriteriaStatus', false)
      context.commit('setScanCriteriaStatus', false)
      context.commit('setStartStatus', true)
    }
  }
})
