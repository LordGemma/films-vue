<template>
    <!-- <i @click="" class="fas fa-search"></i> -->
    <button class="button back-button" @click="handleClick">
        <b-icon
            pack="fas" 
            icon="search"
        ></b-icon>
    </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            search: state => state.films.searchParams.search,
            searchBy: state => state.films.searchParams.searchBy,
            sortBy: state => state.films.params.sortBy,
        })
    },

    methods: {
        handleClick() {
            const url = this.search.length !== 0 ? `/?sortBy=${this.sortBy}&search=${this.search}&searchBy=${this.searchBy}` : `/?sortBy=${this.sortBy}`;
            this.$router.push({path: url})
        }
    }
}
</script>

<style lang="scss">
.back-button {
    color: #f65261;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus:not(:active),
    &:active {
        border: none;
        box-shadow: none;
        outline: none;
    }
}
</style>


