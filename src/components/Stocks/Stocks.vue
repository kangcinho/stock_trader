<template>
    <div id="stocks">
        <app-stock 
            v-for="stock in stockLists"
            :key="stock.codeStock"
            :codeStock="stock.codeStock"
            :currentPrice="stock.currentPrice"
            :companyName="stock.companyName"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as stockTypes from '../../store/modules/stock/types'

import Stock from './Stock/Stock'
export default {
    computed: {
        ...mapGetters({
            stockLists: stockTypes.GETTER_ALL_STOCK
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