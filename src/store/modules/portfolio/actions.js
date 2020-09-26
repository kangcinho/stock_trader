import * as portfolioTypes from './types'
import axios from '../../../axiosconfig'

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
    },
    [portfolioTypes.ACTION_EXPORT_STATE_TO_FIREBASE]: ({commit, getters}) => {
        const portfolioState = getters[portfolioTypes.GETTER_STATE];
        axios.post('/portfolio.json', portfolioState)
        .then( (respon) => {
            alert("Save Berhasil")
        })
        .catch( (err) => {
            alert("Save Gagal". err)
        })
    },
    [portfolioTypes.ACTION_IMPORT_STATE_FROM_FIREBASE]: ({commit, getters}) => {
        axios.get('/portfolio.json')
        .then( (res) => {
            const groupData = Object.keys(res.data).slice(-1).pop()
            // console.log(res.data[groupData])
            commit(portfolioTypes.MUTATION_SET_STATE, res.data[groupData]);
        })
        .catch( (err) => {
            alert("Load Gagal". err)
        })
    }
}

export default actions