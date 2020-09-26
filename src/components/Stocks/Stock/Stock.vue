<template>
    <div id="stock">
       <div class="stock-title" :title="companyName">
           {{ codeStock }}
           <span class="stock-sub-title">
               ( 
                   <span> Current Price: Rp {{currentPrice}}  </span>
                   <span v-if="quantityStock">| Quantity: {{ quantityStock }} Lot | Price AVG: {{ priceAVG }}</span>
                )
           </span>
        </div>
        <div class="stock-content">
            <input type="number" placeholder="Quantity" v-model="stockSummary.quantityStock">
            <button class="btn-sell" v-if="quantityStock" @click="sellStock">Sell</button>
            <button class="btn-buy" v-else @click="buyStock">Buy</button>
        </div>
        <div class="stock-footer" v-if="quantityStock">
            <p>
               <strong> Total Beli:  {{ totalBuy }} </strong>
            </p>
            <p>
               <strong> Floating Profit:  {{ floatingGainLose }} </strong>
            </p>
        </div>
        <div class="stock-footer" v-else>
            <p>
                <strong>Total Harga: {{ totalHarga }}</strong>
            </p>
        </div>
    </div>
</template>

<script>

import * as portofolioTypes from '../../../store/modules/portfolio/types'

export default {
    data(){
        return {
            stockSummary: {
                codeStock: this.codeStock,
                quantityStock: 0
            }
        }
    },
    props: ['codeStock', 'currentPrice', 'companyName', 'quantityStock', 'priceAVG', 'floatingGainLose', 'totalBuy'],
    methods:{
        buyStock(){
            if(this.stockSummary.quantityStock > 0){
                this.$store.dispatch(
                    portofolioTypes.ACTION_BUY_STOCK, 
                    { 
                        ...this.stockSummary,
                        currentPrice: this.currentPrice
                    }
                )
            }else{
                alert("Tidak Dapat membeli Stock dengan Quantity 0")
            }
        },
        sellStock(){
            if(this.stockSummary.quantityStock > 0){
                this.$store.dispatch(
                    portofolioTypes.ACTION_SELL_STOCK, 
                    { 
                        ...this.stockSummary,
                        currentPrice: this.currentPrice,
                    }
                )
            }else{
                alert("Tidak Dapat menjual Stock dengan Quantity 0")
            }
        }
    },
    computed:{
        totalHarga(){
            const currencyFormat = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 2,
                maximumFractionDigits: 4,
            });
            const harga = this.stockSummary.quantityStock * this.currentPrice * 100
            return currencyFormat.format(harga)
        }
    }
}
</script>


<style scope>
    #stock{
        width: 47%;
        border: 1px solid #3498DB;
        border-radius: 4px;
        display: inline-block;
        margin-left: 20px;
        margin-bottom: 20px;
    }
    #stock .stock-title {
        font-weight: bold;
        padding: 5px 20px;
        background-color: #75DA8B;
        opacity: 70%;
        color: #0A3D62;
        font-size: 20px;
    }
    #stock .stock-title .stock-sub-title{
        font-size: 11px;
    }

    #stock .stock-content,
    #stock .stock-footer{
        padding: 10px;
        overflow: auto;
    }

    #stock .stock-content input{
        float: left;
        height: 30px;
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
    }
    #stock .stock-content input:focus{
        outline:  1px solid #75DA8B;
    }

    #stock .stock-content button{
        float:right;
        height: 30px;
        padding: 0px 20px;
        text-align: center;
    }
    #stock .stock-content .btn-buy{
        background-color: #6AB04A;
        opacity: 70%;
        border: 1px solid #75DA8B;
        color: #fff;
    }
    #stock .stock-content .btn-buy:hover{
        opacity: 50%;
        font-weight: bold;
        cursor: pointer;
    }
    #stock .stock-content .btn-sell{
        background-color: #FF3031;
        opacity: 70%;
        border: 1px solid#FF3031;
        color: #fff;
    }
    #stock .stock-content .btn-sell:hover{
        opacity: 50%;
        font-weight: bold;
        cursor: pointer;
    }

    
</style>