import { fetchFilmData, fetchAllFilms } from '@/api/films';

const state = {
    filmData: {},
    filmId: 0,
    filmsWithSimilarGenres: [],
}

const getters = {

}

const actions = {
    async getSimilarGenres({commit}, genres) {
        const params = {searchBy: 'genres', filter: genres}
        const { data } = await fetchAllFilms(params);
        commit('setFilmsWithSimilarGenres', data)
    },

    async getFilmData({commit, dispatch}, filmId) {
        const { data } = await fetchFilmData(filmId);
        await dispatch('getSimilarGenres', data.genres)
        commit('setFilmData', data);
    }
}

const mutations = {
    setFilmData(state, film) {
        state.filmData = film;
        state.filmId = film.id;
    },
    setFilmsWithSimilarGenres(state, films) {
        state.filmsWithSimilarGenres = films;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}