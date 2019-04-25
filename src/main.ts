import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// @ts-ignore
import Vuesax from 'vuesax';
import './registerServiceWorker';

Vue.config.productionTip = false;

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
