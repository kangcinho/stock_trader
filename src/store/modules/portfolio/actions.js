import * as portfolioTypes from './types'

const actions = {
    [portfolioTypes.ACTION_BUY_STOCK]: ({commit, getters}, payload) => {
        const totalSaldo = getters[portfolioTypes.GETTER_SALDO]
        const isSaldoCukup = (payload.currentPrice * payload.quantityStock * 100 ) <= totalSaldo 
        
        if(isSaldoCukup){
            commit(portfolioTypes.MUTATION_BUY_STOCK, {payload, getters})
        }else{
            return alert("SALDO TIDAK CUKUP")
        }
    },
    [portfolioTypes.ACTION_SELL_STOCK]: ({commit, getters}, payload) => {
        const portfolio = getters[portfolioTypes.GETTER_PORTOFOLIO_STOCK].filter( (porto) => porto.codeStock === payload.codeStock )[0]
        const isQuantityCukup = payload.quantityStock <= portfolio.quantityStock
        
        if(isQuantityCukup){
            commit(portfolioTypes.MUTATION_SELL_STOCK, {payload, getters})
        }else{
            return alert("Quantity Melebihi Kepemilikan")
        }
    }
}

export default actions