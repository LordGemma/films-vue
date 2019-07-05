<template>
    <section>
        <div class="container">
            <b-pagination
                v-show="total > 12"
                :total="total"
                :current.sync="currentPage"
                :order="order"
                :size="size"
                :simple="isSimple"
                :rounded="isRounded"
                :per-page="perPage"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">
            </b-pagination>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    data() {
        return {
            perPage: 12,
            order: 'is-centered',
            size: 'is-small',
            isSimple: false,
            isRounded: false,
        }
    },

    computed: {
        ...mapState({
            total: state => state.films.total,
        }),
        currentPage: {
            get() {
                return this.$store.state.films.params.offset / 12 + 1;
            },

            set(value) {
                this.$store.dispatch('films/getNextFilmsPage', value)
            }
        }
    },
}
</script>

<style lang="scss">
.pagination {
    margin-top: 30px;

    .pagination-previous, .pagination-next {
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
