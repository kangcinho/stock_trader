import * as stockTypes from './types'
const actions = {
    [stockTypes.ACTION_CURRENT_PRICE]: (context) => {
        context.commit(
            stockTypes.MUTATION_CURRENT_PRICE
        )
    },
    
}

export default actions;