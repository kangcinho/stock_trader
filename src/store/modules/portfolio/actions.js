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
    }
}

export default actions