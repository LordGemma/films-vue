import Vue from 'vue';
import Vuex from 'vuex';
import films from './modules/films';
import singleFilm from './modules/singleFilm';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    singleFilm,
  },
})
