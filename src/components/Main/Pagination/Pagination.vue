<template>
    <section>
        <div class="container">
            <b-pagination
                :total="total"
                :current.sync="current"
                :order="order"
                :size="size"
                :simple="isSimple"
                :rounded="isRounded"
                :per-page="perPage"
                @change="getAllFilms"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">
            </b-pagination>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            current: 1,
            perPage: 12,
            order: 'is-centered',
            size: 'is-small',
            isSimple: false,
            isRounded: false
        }
    },

    computed: mapState({
        total: state => state.films.total
    }),

    methods: mapActions('films', [
        'getAllFilms'
    ])
}
</script>

<style lang="scss">
.pagination {
    margin-top: 30px;

    .pagination-previous, .pagination-next, {
        background-color: #9f9f9f;
    }

    .pagination-previous, .pagination-next, .pagination-link {
        border-color: #9f9f9f;
        color: #9f9f9f;
    }

    .pagination-link.is-current {
        background-color: #f65261;
        border-color: #f65261;
        color: white;
    }
}
</style>
