<template>
  <div class="card">
    <div style="background-color: rgb(227, 242, 253)">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.price}})</small>
      </div>
      <div class="card-body row justify-content-between">
        <div class="card-text col-mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Amount"
            v-model="quantity"
          />
        </div>
        <div class="card-text">
          <button class="btn btn-info" 
          @click="buyStock" :disabled="quantity <= 0 || checkFunds">
          {{checkFunds ? 'You are broke bro' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    checkFunds(){
      return this.stock.price*this.quantity > this.$store.getters.fundsAmount
    }
  },
  methods: {
    buyStock() {
      const parsed = parseInt(this.quantity)
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parsed
      };
      console.log(order)
      this.$store.dispatch("buyStock", order);
      this.quantity = null;
    }
  }
};
</script>