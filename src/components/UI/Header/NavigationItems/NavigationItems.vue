<template>
    <div id="navbar-items">
        <ul>
            <app-navigation-item 
                v-for="(navigationItem, index) in navigationItems" 
                :key="index"
                :label="navigationItem.label"
                :routerLink="navigationItem.routerLink"
            />
        </ul>
    </div>
</template>

<script>
import NavigationItem from './NavigationItem/NavigationItem'
export default {
    data(){
        return {
            navigationItems:[
                {
                    label: 'Portfolio',
                    routerLink: '/portfolio'
                },
                {
                    label: 'Stocks',
                    routerLink: '/stocks'
                },
                {
                    label: 'End Day',
                    routerLink: '/end-day'
                },
                {
                    label: 'Save',
                    routerLink: '/save'
                },
                {
                    label: 'Load',
                    routerLink: '/load'
                }
            ]
        }
    },
    components:{
        appNavigationItem: NavigationItem
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