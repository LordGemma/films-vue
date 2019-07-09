<template>
    <div>
        <Header>
            test
        </Header>
    </div>
            
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Logo from '@/components/Logo/Logo';
import Header from '@/components/Header/Header';

export default {
    components: {
        Logo,
        Header,
    },

    created() {
        const filmId = this.$route.params.id;
        this.$store.dispatch('singleFilm/getFilmData', filmId);
    },

    computed: {
        ...mapState({
            filmData: state => state.singleFilm.filmData,
        })
    },

    mounted() {
        
    }
}
</script>

