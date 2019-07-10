<template>
    <div class="rating">
        {{rating}}
    </div>
</template>

<script>
export default {
    props: {
        rating: {
            required: true,
            type: Number,
            default: () => 0
        }
    }
}
</script>

<style lang="scss" scoped>
.rating {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    color: #80b859;
    font-size: 22px;
    border-radius: 50%;
    margin-left: 20px;
}
</style>

