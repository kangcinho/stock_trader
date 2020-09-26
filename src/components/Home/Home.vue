<template>
    <div>
        <h1>Trade or View Portfolio Stock</h1>
        <p>Tersedia Feature Save & Load data ke Firebase</p>
        <p>End Day untuk Mengakhiri hari Bursa dan mendapatkan current price stock</p>
        <hr />
        <h3>Saldo Anda: {{ saldo }}</h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as portofolioType from '../../store/modules/portfolio/types'
export default {
    computed:{
        ...mapGetters({
            saldo: portofolioType.GETTER_SALDO_READABLE
        })
    }
}
</script>


<style scope>
    h1 {
        font-size: 32px;
    }
</style>