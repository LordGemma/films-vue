import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);
Vue.use(Vuex);

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);