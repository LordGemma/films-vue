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
        const isSearchAvelable = Object.keys(this.$route.query).length !== 0;
        let params = {
            limit: 12, 
            sortOrder: 'desc', 
            sortBy: 'release_date',
        }
        if(isSearchAvelable) {
            params = {
                ...params,
                search: this.$route.query.search || '',
                searchBy: this.$route.query.searchBy || 'title',

            }
        }

        this.$store.dispatch('films/getAllFilms', params)
    },
}
</script>

<style lang="scss">
.wrapper {
    padding: 30px 0;
    background-color: #232323;
}
</style>


