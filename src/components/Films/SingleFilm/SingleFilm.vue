<template>
    <div>
        <Header>
            <template v-slot:back-button>
                <back-button />
            </template>
            <template v-slot:content>
                <div class="columns">
                    <div class="column is-one-quarter">
                        <poster :poster="filmData.poster_path" />
                    </div>
                    <div class="column">
                        <film-details :data="filmData" />
                    </div>
                </div>
            </template>
        </Header>
        <section class="same-genres"></section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Logo from '@/components/Logo/Logo';
import Header from '@/components/Header/Header';
import BackButton from '@/components/Button/BackButton';
import Poster from './Poster';
import FilmDetails from './FilmDetails/FilmDetails';

export default {
    components: {
        Logo,
        Header,
        BackButton,
        Poster,
        FilmDetails,
    },

    created() {
        const filmId = this.$route.params.id;
        this.$store.dispatch('singleFilm/getFilmData', filmId);
    },

    beforeDestroy() {
        this.$store.commit('singleFilm/setFilmData', {})
    },

    computed: {
        ...mapState({
            filmData: state => state.singleFilm.filmData,
        })
    },
}
</script>

