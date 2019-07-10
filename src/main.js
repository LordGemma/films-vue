import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faArrowUp, 
  faAngleRight, 
  faAngleLeft, 
  faAngleDown, 
  faCaretDown, 
  faCaretUp,
  faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowUp, 
  faAngleRight, 
  faAngleLeft, 
  faAngleDown, 
  faCaretDown, 
  faCaretUp,
  faSearch);

Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
