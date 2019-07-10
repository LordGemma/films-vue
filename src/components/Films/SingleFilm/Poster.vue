<template>
    <img :src="poster" alt="Film Poster">
</template>

<script>
export default {
    props: {
        poster: {
            required: true,
            type: String,
            default: () => '@/assets/poster-placeholder.jpg'
        }
    }
}
</script>

