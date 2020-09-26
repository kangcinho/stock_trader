import * as stockTypes from './types'
import axios from '../../../axiosconfig'

const actions = {
    [stockTypes.ACTION_CURRENT_PRICE]: (context) => {
        context.commit(
            stockTypes.MUTATION_CURRENT_PRICE
        )
    },
    [stockTypes.ACTION_EXPORT_STATE_TO_FIREBASE]: ({commit, getters}) => {
        const stocks = getters[stockTypes.GETTER_ALL_STOCK]

        axios.post('/stocks.json', stocks)
        .then( (res) => {
            alert("Export Stock Berhasil")
        })
        .catch ((err) => {
            alert("Export Stock Gagal", err)
        })
    },
    [stockTypes.ACTION_IMPORT_STATE_FROM_FIREBASE]: ({commit}) => {
        axios.get('/stocks.json')
        .then( (res) => {
            const groupData = Object.keys(res.data).slice(-1).pop();
            commit(stockTypes.MUTATION_SET_STATE, res.data[groupData])
        })
    }
    
}

export default actions;