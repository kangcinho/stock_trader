<template>
    <li>
        <router-link :to="routerLink"> {{ label }} </router-link>
    </li>
</template>

<script>
export default {
    props: ['label', 'routerLink']
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
</style>