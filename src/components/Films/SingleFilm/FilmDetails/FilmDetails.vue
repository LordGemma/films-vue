<template>
    <div class="film-details">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{data.title}}
                        <rating v-show="data.vote_average" :rating="data.vote_average" />
                    </h1>
                    <div class="genres">
                        <b-taglist>
                            <b-tag v-for="genre in data.genres" :key="genre">{{genre}}</b-tag>
                        </b-taglist>
                    </div>
                    <h2 class="subtitle">
                    <p><span>{{new Date(data.release_date).getFullYear()}}</span> year</p>
                        <p v-show="data.runtime"><span>{{data.runtime}}</span> min</p>
                    </h2>
                    <p v-show="data.overview" class="film-overview">{{data.overview}}</p>
                </div>
            </div>
        </section>
        <section >
            
        </section>
    </div>
</template>

<script>
import Rating from './Rating';

export default {
    components: {
        Rating,
    },
    
    props: {
        data: {
            required: true,
            type: Object,
        }
    }
}
</script>

<style lang="scss">
.film-details {
    .title {
        color: white;
        display: flex;
        align-items: center;
    }

    .subtitle {
        margin-top: 20px;
        color: white;
        display: flex;
        p {
            font-size: 16px;
            margin-right: 20px;
            span {
                color: #f65261;
                font-size: 20px;
            }
        }
    }

    .film-overview {
       color: white;
    }
}
</style>


