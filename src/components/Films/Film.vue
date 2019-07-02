<template>
    <div class="card film">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg" alt="Film Poster">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-8 film-title">
                        Zootopia
                        <span class="release-date">
                            <b-tag>2010</b-tag>
                        </span>
                    </p>
                </div>
            </div>

            <b-taglist>
                <b-tag>Animation</b-tag>
                <b-tag>Adventure</b-tag>
                <b-tag>Family</b-tag>
                <b-tag>Comedy</b-tag>
            </b-taglist>
        </div>
    </div>
</template>

<style lang="scss">
    .film {
        background-color: transparent;
        box-shadow: none;

        .image {
            min-height: 350px;
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

