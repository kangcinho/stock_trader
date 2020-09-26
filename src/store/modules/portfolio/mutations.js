import * as portfolioTypes from './types'

const mutations = {
    [portfolioTypes.MUTATION_BUY_STOCK]: (state, {payload, getters}) => {
        let stock = {};
        
        // CEK Stock Exist at Portofolio
        const portoStockAll = [...getters[portfolioTypes.GETTER_PORTOFOLIO_STOCK]]
        const stockExistIndex = portoStockAll.findIndex( (porto) => porto.codeStock === payload.codeStock)
        
        if(stockExistIndex !== -1){
            stock = portoStockAll[stockExistIndex]
            stock.priceAVG = ( (stock.quantityStock * stock.priceAVG) + ( +payload.quantityStock * +payload.currentPrice)  ) / ( +payload.quantityStock + stock.quantityStock) 
            stock.priceAVG = Math.round((stock.priceAVG + Number.EPSILON) * 100) / 100
            console.log(stock.priceAVG)
            stock.quantityStock += +payload.quantityStock
        }else{
            stock.codeStock = payload.codeStock
            stock.priceAVG = +payload.currentPrice;
            stock.quantityStock = +payload.quantityStock;
            stock.floatingGainLose = 0;
        }

        //SAVE STOCK TO PORTFOLIO
        if(stockExistIndex !== -1){
            state.stocks[stockExistIndex] = stock
            state.saldo -= +payload.quantityStock * +payload.currentPrice
        }else{
            state.stocks.push(stock)
            state.saldo -= +payload.quantityStock * +payload.currentPrice
        }
        alert("BUY SUKSES")
    }
}

export default mutations