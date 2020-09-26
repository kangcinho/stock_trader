import state from './state';
import * as stockTypes from './types'
const mutations = {
    [stockTypes.MUTATION_CURRENT_PRICE]: (state) => {
       const stocks = [...state.stocks]
       stocks.map( (stock) => {
           const minRangePriceStock = stock.currentPrice * (1 - 0.25);
           const maxRangePriceStock = stock.currentPrice * (1 + 0.25);
           const currentPrice = (Math.random() * (maxRangePriceStock - minRangePriceStock)) + minRangePriceStock
           stock.currentPrice = +(currentPrice.toFixed(0))
       })
    },
    [stockTypes.MUTATION_SET_STATE]: (state, payload) => {
        state.stocks = payload;
    }
}

export default mutations;