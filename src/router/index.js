import Vue from 'vue'
import VueRouter from 'vue-router'

// const HomeAdress = '../views/Elements/Home.vue';
// const StockGridAdress = '../views/Elements/StockGrid.vue';
// const PortfolioAdress = '../views/Elements/Portfolio.vue';

Vue.use(VueRouter)

const Home = resolve => {
  require.ensure(['../views/elements/Home.vue'], () => {
    resolve(require('../views/elements/Home.vue'));
  });
}
const StockGrid = resolve => {
  require.ensure(['../views/elements/Stocks/StockGrid.vue'], () => {
    resolve(require('../views/elements/Stocks/StockGrid.vue'));
  });
}
const Portfolio = resolve => {
  require.ensure(['../views/elements/Portfolio/Portfolio.vue'], () => {
    resolve(require('../views/elements/Portfolio/Portfolio.vue'));
  });
}

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/stocks', component: StockGrid, name: 'stockgrid' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
