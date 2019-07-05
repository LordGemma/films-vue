<template>
    <div class="tile is-parent">
        <article class="tile is-child notification is-info">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
            <p class="title">Middle tile</p>
            <p class="subtitle">With an image</p>
        </article>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    created() {
        const filmId = this.$route.params.id;
        this.$store.dispatch('singleFilm/getFilmData', filmId);
    },

    computed: {
        ...mapState({
            filmData: state => state.singleFilm.filmData,
        })
    }
}
</script>

