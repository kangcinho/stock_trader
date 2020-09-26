import * as stockTypes from './types'

const getters = {
    [stockTypes.GETTER_ALL_STOCK]: (state) => {
        return state.stocks
    },
    [stockTypes.GETTER_A_STOCK]: (state) => codeStock => {
        return state.stocks.filter( (stock) => (
            stock.codeStock === codeStock
        ))
    }
}

export default getters;