import Vue from 'vue';
import AppLayout from './theme/Layout.vue';
import router from './router';
import store from './vuex/index.js'

const app = new Vue({
  router,
  store,
  ...AppLayout
})

export { app, router, store }
