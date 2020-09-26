<template>
    <div id="navbar-items">
        <ul>
            <app-navigation-item 
                v-for="(navigationItem, index) in navigationItems" 
                :key="index"
                :label="navigationItem.label"
                :routerLink="navigationItem.routerLink"
                :isMenuRouter="navigationItem.isMenuRouter"
            />
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as stockTypes from '../../../../store/modules/stock/types'
import NavigationItem from './NavigationItem/NavigationItem'
export default {
    data(){
        return {
            navigationItems:[
                {
                    label: 'Portfolio',
                    routerLink: '/portfolio',
                    isMenuRouter: true
                },
                {
                    label: 'Stocks',
                    routerLink: '/stocks',
                    isMenuRouter: true
                },
                {
                    label: 'End Day',
                    routerLink: this.getCurrentPrice,
                    isMenuRouter: false
                },
                {
                    label: 'Save',
                    routerLink: this.getCurrentPrice,
                    isMenuRouter: false
                },
                {
                    label: 'Load',
                    routerLink: this.getCurrentPrice,
                    isMenuRouter: false
                }
            ]
        }
    },
    components:{
        appNavigationItem: NavigationItem
    },
    methods:{
        ...mapActions({
            getCurrentPrice: stockTypes.ACTION_CURRENT_PRICE
        })
    }
}
</script>

<style scoped>
    #navbar-items{
        float:right;
        padding: 10px;
    }
    #navbar-items ul {
        list-style: none;
    }
    
</style>