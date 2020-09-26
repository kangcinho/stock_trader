<template>
    <div id="stocks">
        <app-stock 
            v-for="stock in stockPortofolioLists"
            :key="stock.codeStock"
            :codeStock="stock.stock.codeStock"
            :currentPrice="stock.stock.currentPrice"
            :companyName="stock.stock.companyName"
            :quantityStock="stock.quantityStock"
            :priceAVG="stock.priceAVG"
            :floatingGainLose="stock.floatingGainLose"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as portfolioTypes from '../../store/modules/portfolio/types'
import Stock from '../Stocks/Stock/Stock'
export default {
    computed:{
        ...mapGetters({
            stockPortofolioLists: portfolioTypes.GETTER_PORTOFOLIO_STOCK
        })
    },
    components:{
        appStock: Stock
    }
}
</script>


<style scope>
    #stocks{
        margin: 0px auto;
    }
</style>