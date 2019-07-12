<template>
    <div class="card film" @click='goToFilmDetails'>
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="data.poster_path" alt="Film Poster">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-8 film-title">
                        {{data.title}}
                        <span class="release-date">
                            <b-tag>{{new Date(data.release_date).getFullYear()}}</b-tag>
                        </span>
                    </p>
                </div>
            </div>

            <b-taglist>
                <b-tag 
                    v-for="genre in data.genres" 
                    :key="genre"
                >{{genre}}</b-tag>
            </b-taglist>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
    },

    methods: {
        goToFilmDetails() {
            this.$router.push({path: `/films/${this.data.id}`});
        }
    }
}
</script>


<style lang="scss">
    .film {
        cursor: pointer;
        background-color: transparent;
        box-shadow: none;

        .image {
            min-height: 400px;
            height: 100%;
            img {
                height: 100%;
            }
        }

        .card-content {
            padding-left: 0;
            padding-right: 0;
        }

        .media-content {
            .film-title {
                color: #9f9f9f;
                font-size: 1.3rem;
                display: flex;

                .release-date {
                    margin-left: auto;

                    .tag {
                        background-color: transparent;
                        color: #9f9f9f;
                        border: 1px solid #9f9f9f;
                    }
                }
            }
        }
    }
</style>

