import axios from 'axios';

axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';

const defaultParams = {
    limit: 12,
    sortOrder: 'desc',
    sortBy: 'release_date',
};

export const fetchAllFilms = (newParams) => axios.get('movies', {
    params: {...defaultParams, ...newParams}
});

export const fetchFilmData = (filmId) => axios.get(`movies/${filmId}`);