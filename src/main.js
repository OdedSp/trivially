// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './vue-plugins'
import './style.scss'

import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate';
import VueSocketio from 'vue-socket.io';
import router from './router'
import store from './store.js'


Vue.use(VeeValidate);
Vue.use(VueSocketio, 'http://localhost:3003', store);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
