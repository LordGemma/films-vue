<template>
    <div class="not-found">
        <div>
            <h1>
                404
            </h1>
            <h2>Page not found</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFound'
}
</script>


<style lang="scss">
.not-found {
    width: 100vw;
    height: 100vh;
    background-color: #f65261;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & > div {
        padding: 3em;
        background-image: url('../assets/donut-vector-flat.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        h1, h2 {
            color: #333;
            width: 100%;
            text-align: center;
        }

        h1 {
            font-size: 7em;
        }

        h2 {
            font-size: 32px;
        }
    }
}
</style>

