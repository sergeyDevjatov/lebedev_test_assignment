import Vue from 'vue';

import store from './store/store';
import router from './router/router';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');
