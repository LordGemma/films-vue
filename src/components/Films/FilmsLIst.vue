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
import { mapState, mapActions } from 'vuex';

export default {
    components: {
       Film, 
    },

    computed: mapState({
        films: state => state.films.filmsList
    }),
}
</script>

