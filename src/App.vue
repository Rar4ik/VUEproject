<template>
  <div class="wrapper container">
    <header style="height: 40px"></header>
    <app-navbar></app-navbar>
    <app-body></app-body>
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
import Body from "./views/Body.vue";
export default {
  components: {
    appNavbar: Navbar,
    appBody: Body
  },
  created(){
    this.$store.dispatch('initStocks');
  }
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
