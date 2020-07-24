<template>
  <div class="card-columns" style="column-count: 1">
    <portfolio-stock v-for="(stock, index) in stockArr" :key="index" :stock="stock"></portfolio-stock>
  </div>
</template>

<script>
import Stock from "./pStock.vue";

export default {
  components: {
    portfolioStock: Stock
  },
  computed: {
    stockArr() {
      return this.$store.getters.stockPortfolio;
    }
  }
};
</script>