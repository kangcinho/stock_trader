<template>
    <div id="navbar">
        <div class="logo">
            <router-link to="/"><h1>STOCK TRADER</h1></router-link>
            
            <h3>Saldo: {{ saldo }}</h3>
        </div>
        <app-navigation-items />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as portofolioTypes from '../../../store/modules/portfolio/types'

import NavigationItems from './NavigationItems/NavigationItems'
export default {
    components:{
        appNavigationItems: NavigationItems,
    },
    computed:{
        ...mapGetters({
            saldo: portofolioTypes.GETTER_SALDO_READABLE
        })
    }
}
</script>

<style scoped>
    #navbar {
        background-color: #DAE0E2;
        overflow: auto;
        border-radius: 3px;
        color: #4C4B4B;
    }
    #navbar .logo{
        padding: 0px 20px;
        float: left;
    }
    
</style>