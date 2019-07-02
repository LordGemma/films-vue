<template>
    <div class="wrapper">
        <FilmsList />
    </div>
</template>

<script>
import FilmsList from '@/components/Films/FilmsList';

export default {
    components: {
       FilmsList, 
    }
}
</script>

<style lang="scss">
.wrapper {
    padding: 30px 0;
    background-color: #232323;
}
</style>


