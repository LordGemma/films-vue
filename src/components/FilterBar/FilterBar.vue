<template>
    <section class="section">
        <div class="container">
            <div class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>7</strong> movies found
                    </p>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <div class="level-item">
                        <span> Sort By</span>
                        <b-field>
                            <b-radio-button v-model="sortBy"
                                native-value="releaseDate">
                                <span>Release Date</span>
                            </b-radio-button>

                            <b-radio-button v-model="sortBy"
                                native-value="rating">
                                <span>Rating</span>
                            </b-radio-button>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            sortBy: 'releaseDate'
        }
    }
}
</script>


<style lang="scss">
    section.section {
        background-color: #373737;
        margin-bottom: 30px;

        .b-radio.radio {
            text-transform: uppercase;
        }

        & .level {
            & .subtitle, & .level-item {
                color: white;
                strong {
                    color: white;
                }
            }
        }
    }
</style>

