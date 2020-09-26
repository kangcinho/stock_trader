import * as stockTypes from './types'

const getters = {
    [stockTypes.GETTER_STOCK]: (state) => {
        return state.stocks
    }
}

export default getters;