const state = {
    stocks: []
}

const getters = {
    stockPortfolio (state, getters) {
        state.stocks = getters.boughtStocks;
        return state.stocks.map(stock => {
            const record = getters.stocks.find(elem => elem.id == stock.id);
            
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    }
}

const actions = {
    sellStock: ({ commit }, payload) => {
        commit('SELL_STOCK', payload)
    }
}



export default {
    state,
    getters,
    actions
}