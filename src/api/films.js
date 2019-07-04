import axios from 'axios';

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';

export const fetchAllFilms = (passedParams = {}) => axios.get('movies', {
    params: passedParams
});

export const fetchFilmData = (filmId) => axios.get(`movies/${filmId}`);