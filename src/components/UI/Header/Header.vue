<template>
    <div id="navbar">
        <div class="logo">
            <router-link to="/"><h1>STOCK TRADER</h1></router-link>
            
            <h3>Saldo: Rp 1000</h3>
        </div>
        <app-navigation-items />
    </div>
</template>

<script>
import NavigationItems from './NavigationItems/NavigationItems'
export default {
    components:{
        appNavigationItems: NavigationItems,
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