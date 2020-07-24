import Vue from 'vue'
import Vuex from 'vuex'

import StocksObj from './modules/objects/stocks'
import Transaction from './modules/executions/transaction'
import Portfolio from './modules/objects/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Transaction,
    StocksObj,
    Portfolio
  }
})
