<template>
  <div class="card-columns" style="column-count: 2">
    <app-stock v-for="(stock, index) in StockArr" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {};
  },
  components: {
    appStock: Stock
  },
  computed: {
    StockArr() {
      return this.$store.getters.stocks;
    }
  },
};
</script>
