import * as portfolioTypes from './types'
import * as stockTypes from '../stock/types'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });

const getters = {
    [portfolioTypes.GETTER_SALDO]: (state) => {
        return state.saldo;
    },
    [portfolioTypes.GETTER_SALDO_READABLE]: (state) => {
        return formatter.format(state.saldo)
    },
    [portfolioTypes.GETTER_PORTOFOLIO_STOCK]: (state, getters) => {
        const portfolio = [...state.stocks];
        portfolio.map( (porto) => {
            const stock = getters[stockTypes.GETTER_A_STOCK](porto.codeStock)[0]
            porto.stock = stock;

            const gainlose = (stock.currentPrice - porto.priceAVG ) * porto.quantityStock * 100
            porto.floatingGainLose = formatter.format(gainlose);
        })
        return portfolio
    }
}

export default getters