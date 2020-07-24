import Vue from 'vue'

const state = {
    stocks: [],
    funds: 10000
}

const getters = {
    boughtStocks: state => {
        return state.stocks
    },
    fundsAmount: state => {
        return state.funds;
    }
}

const actions = {
    loadingData: ({ commit }) => {
        Vue.http.get('data.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const stocks = data.stocks;
                    const stockQuantity = data.stockQuantity;
                    const funds = data.funds;

                    const portfolio = {
                        stockQuantity,
                        funds
                    }

                    commit('SET_PORTFOLIO', portfolio)
                    commit('SET_STOCKS', stocks)
                }
            })
    }
}

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity
        }
        else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }

        state.funds += stockPrice * quantity
    },

    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockQuantity ? portfolio.stockQuantity : []
    }
}


export default {
    state,
    mutations,
    getters,
    actions
}

