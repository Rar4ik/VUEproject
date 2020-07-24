<template>
    <div>
        <h2>Торгуй и выигрывай настоящие деньги, биткойныЙ!</h2>
        <p>Можно будет нажать на "сохранить" и "загрузить" если проиграл</p>
        <p>Нажми "Энд Дей" и перейди к следующему игровому дню</p>
        <br>
        <hr>
        <br>
        <h2 class="fa fa-money" aria-hidden="true">У тебя есть денег: {{money | currency}}</h2>
    </div>
</template>

<script>

export default {
  computed:{
    money(){
      return this.$store.getters.fundsAmount;
    }
  }  
}
</script>