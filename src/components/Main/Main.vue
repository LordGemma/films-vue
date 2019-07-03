<template>
    <div class="wrapper">
        <FilmsList />
        <Pagination />
    </div>
</template>

<script>
import FilmsList from '@/components/Films/FilmsList';
import Pagination from './Pagination/Pagination';

export default {
    components: {
       FilmsList,
       Pagination, 
    },

     created() {
        this.$store.dispatch('films/getAllFilms')
    },
}
</script>

<style lang="scss">
.wrapper {
    padding: 30px 0;
    background-color: #232323;
}
</style>


