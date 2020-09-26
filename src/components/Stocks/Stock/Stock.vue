<template>
    <div id="stock">
       <div class="stock-title" :title="companyName">
           {{ codeStock }}
           <span class="stock-sub-title">
               ( 
                   <span> Current Price: Rp {{currentPrice}}  </span>
                   <span v-if="quantityStock">| Quantity: {{ quantityStock }} | Price AVG: {{ priceAVG }}</span>
                )
           </span>
        </div>
        <div class="stock-content">
            <input type="text" placeholder="Quantity">
            <button class="btn-sell" v-if="quantityStock">Sell</button>
            <button class="btn-buy" v-else>Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['codeStock', 'currentPrice', 'companyName', 'quantityStock', 'priceAVG']
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

    #stock .stock-content{
        padding: 10px;
        overflow: auto;
    }

    #stock .stock-content input{
        float: left;
        height: 30px;
        width: 300px;
        padding: 10px;
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