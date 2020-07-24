import StockArr from '../../../data/stocksArr'

const state = {
    stocks: []
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(element => {
            element.price = Math.round(element.price *(1 + Math.random() - 0.5));
        });
    }
}

const actions = {
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', StockArr)
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS')
    }, 
    buyStock: ({ commit }, payload) => {
        commit('BUY_STOCK', payload)
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}