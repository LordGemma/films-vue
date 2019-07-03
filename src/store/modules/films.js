import { fetchAllFilms } from '@/api/films';

const state = {
    filmsList: [],
    currentPage: 1,
    filmData: {},
    total: 0,
};

const getters = {

};

const actions = {
    async getAllFilms({commit}, pageNumber = 1) {
        const offset = (pageNumber - 1) * 12;
        const films = await fetchAllFilms({offset: offset});
        commit('setFilms', films.data);
    },
};

const mutations = {
    setFilms (state, films) {
        state.filmsList = films.data;
        state.total = films.total;
      },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }