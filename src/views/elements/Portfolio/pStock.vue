<template>
  <div class="card">
    <div style="background-color: rgb(227, 242, 253)">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.price}} | Amount: {{stock.quantity}})</small>
      </div>
      <div class="card-body row justify-content-between">
        <div class="card-number col-mb-3">
          <input
            type="number"
            class="form-control"
            placeholder="Amount"
            aria-label="Имя пользователя"
            aria-describedby="basic-addon1"
            v-model="quantity"
          />
        </div>
        <div class="card-text">
          <button class="btn btn-info" @click="sellStock" 
          :disabled="quantity <= 0 || checkAmount">
          {{checkAmount ? 'thats greater than you have' : 'Sell'}}</button>
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
      quantity: {
        type: Number,
        default: 0
      }
    };
  },
  computed: {
    checkAmount(){
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sellStock() {
      const parsed = parseInt(this.quantity);
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parsed
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = null
    }
  }
};
</script>