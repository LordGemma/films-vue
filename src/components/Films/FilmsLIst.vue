<template>
    <div class="container">
        <div class="columns is-multiline is-variable is-6">
            <div
                class="column is-one-quarter"
                v-for="film in films"
                :key="film.id"
            >
                <Film :data="film" />
            </div>
        </div>
    </div>
</template>

<script>
import Film from './Film';
import { fetchAllFilms } from '@/api/films';

export default {
    components: {
       Film, 
    },

    created() {
        fetchAllFilms()
        .then(({data}) => {
            this.films = data.data;
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    data() {
        return {
            films: []
        }
    }
}
</script>

