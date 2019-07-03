import axios from 'axios';

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';

const defaultParams = {
    limit: 12,
    sortOrder: 'desc',
    sortBy: 'release_date',
    offset: 0,
};

export const fetchAllFilms = (passedParams = {}) => axios.get('movies', {
    params: {...defaultParams, ...passedParams}
});

export const fetchFilmData = (filmId) => axios.get(`movies/${filmId}`);