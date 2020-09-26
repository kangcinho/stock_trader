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
        }

        //SAVE STOCK TO PORTFOLIO
        if(stockExistIndex !== -1){
            state.stocks[stockExistIndex] = stock
            state.saldo -= +payload.quantityStock * +payload.currentPrice * 100
        }else{
            state.stocks.push(stock)
            state.saldo -= +payload.quantityStock * +payload.currentPrice * 100
        }
        alert(`BUY STOCK ${payload.codeStock} SUKSES`)
    },

    [portfolioTypes.MUTATION_SELL_STOCK]: (state, {payload, getters}) => {
        let stock = {};

        // CEK Stock Exist at Portofolio
        const portoStockAll = [...getters[portfolioTypes.GETTER_PORTOFOLIO_STOCK]]
        const stockExistIndex = portoStockAll.findIndex( (porto) => porto.codeStock === payload.codeStock)

        if(stockExistIndex !== -1){
            stock = portoStockAll[stockExistIndex]
            stock.quantityStock -= +payload.quantityStock
        }else{
            alert(`STOCK ${payload.codeStock} TIDAK ADA DI PORTFOLIO`)
        }

        // SAVE STOCK UPDATE
        if(stockExistIndex !== -1){
            state.saldo += ( +payload.quantityStock * +payload.currentPrice * 100 )
            // console.log( +payload.quantityStock * +payload.currentPrice * 100 )
            if(stock.quantityStock <= 0 ){
                state.stocks.splice(stockExistIndex, 1);
            }else{
                state.stocks[stockExistIndex] = stock;
            }
            alert(`Penjualan Stock ${payload.codeStock} Berhasil`)
        }
    }
}

export default mutations