<template>
    <div id="stocks">
        <app-stock 
            v-for="stock in stockLists"
            :key="stock.codeStock"
            :codeStock="stock.codeStock"
            :currentPrice="stock.currentPrice"
            :companyName="stock.companyName"
            :quantityStock="10"
            :priceAVG="200"
        />
    </div>
</template>

<script>
import Stock from '../Stocks/Stock/Stock'
export default {
    data(){
        return {
            stockLists: [
                {
                    codeStock: "TLKM",
                    currentPrice: 2700,
                    companyName: 'PT Telkom Indonesia tbk'
                },
                {
                    codeStock: "BBRI",
                    currentPrice: 3045,
                    companyName: 'PT Bank BRI Tbk' 
                },
                {
                    codeStock: "BBCA",
                    currentPrice: 28000,
                    companyName: 'PT Bank BCA Tbk' 
                },
                {
                    codeStock: "BBNI",
                    currentPrice: 4500,
                    companyName: 'PT Bank BNI Tbk' 
                },
                {
                    codeStock: "BMRI",
                    currentPrice: 3250,
                    companyName: 'PT Bank Mandiri Tbk' 
                },
                {
                    codeStock: "UNVR",
                    currentPrice: 8888,
                    companyName: 'PT Unilever Indonesia Tbk' 
                }
            ]
        }
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