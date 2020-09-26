<template>
    <li>
        <router-link 
            :to="routerLink" 
            v-if="isMenuRouter"> {{ label }} </router-link>
        <button
            @click="routerLink" 
            v-else>{{ label }}</button>
    </li>
</template>

<script>
export default {
    props: ['label', 'routerLink', 'isMenuRouter']
}
</script>

<style scoped>
    li{
        float: left;
        padding: 0px 5px;
    }
    li a{
        padding: 30px;
        color: #4C4B4B;
    }
    li a:hover,
    li a.active
    {
        background-color:#A4B0BD ;
        font-weight: bold;
    }
    li button{
        padding: 0px 30px;
        color: #4C4B4B;
        border: none;
        background-color: inherit;
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }
    li button:hover
    {
        /* background-color:#A4B0BD ; */
        font-weight: bold;
        cursor: pointer;
    }
</style>