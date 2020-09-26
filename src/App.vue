<template>
  <div class="container">
    <app-header />

    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from './components/UI/Header/Header'
export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style scoped>
  .container{
    max-width: 1100px;
    margin: 10px auto;
  }
  .content{
    padding: 20px;
    border: 1px solid #DAE0E2;
    margin: 20px 0px;
    border-radius: 4px;
  }
</style>
