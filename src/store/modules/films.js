import { fetchAllFilms } from '@/api/films';

const state = {
    filmsList: [],
    filmData: {},
    total: 0,
    params: {
        offset: 0,
        sortBy: 'release_date',
        limit: 12,
        sortOrder: 'desc',
    },
    searchParams: {
        search: '',
        searchBy: 'title',
    }
};

const getters = {
   
};

const actions = {
    async getAllFilms({commit}, params) {
        const films = await fetchAllFilms(params);
        commit('setFilms', films.data);
    },

    async sortFilmsBy({state, commit, dispatch}, value) {
        console.log(state);
        const params = {
            ...state.params,
            sortBy: value,
        };
        await dispatch('getAllFilms', params);
        commit('setSortBy', value);
    },

    async getNextFilmsPage({commit, dispatch}, value) {
        const pagination = (value - 1) * 12;
        const params = {
            ...state.params,
            offset: pagination,
        };
        await dispatch('getAllFilms', params);
        commit('setPageNumber', pagination);
    },

    async searchFilms({dispatch, commit}, searchParams) {
        const params = {
            ...state.params,
            ...searchParams,
        };
        console.log(params);
        // await dispatch('getAllFilms', params);
        // commit('', searchParams);
    }   
};

const mutations = {
    setFilms(state, films) {
        state.filmsList = films.data;
        state.total = films.total;
    },

    setSortBy(state, value) {
        state.params.sortBy = value;
    },

    setPageNumber(state, value) {
        state.params.offset = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }