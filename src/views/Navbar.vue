<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-md navbar-light"
    style="background-color: #e3f2fd;"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <router-link class="navbar-brand" :to="{name: 'home'}">Stock trader</router-link>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'portfolio'}">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'stockgrid'}">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto mr-sm-2">
        <li class="nav-item">
          <a class="nav-link btnCli" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item btnCli" @click="saveData" >Save</a>
            <a class="dropdown-item btnCli" @click="loadData">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link btnCli">Funds: {{money | currency}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    money() {
      return this.$store.getters.fundsAmount;
    }
  },
  methods: {
    ...mapActions([
      "randomizeStocks",
      'loadingData'
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.fundsAmount,
        stockQuantity: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData(){
       this.loadingData();
    }
  }
};
</script>

<style lang="stylus" scoped>
.btnCli {
  cursor: pointer;
}
</style>