import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const resource = Vue.http.options.root = 'https://finalproject-3b7a0.firebaseio.com/';

export default resource