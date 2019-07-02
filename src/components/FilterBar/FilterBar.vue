<template>
    <section class="section filter-bar">
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
                        <RadioButtons
                            :label='label'
                            :selectBy='sortBy' 
                            :buttons='buttons' 
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import RadioButtons from '../Button/RadioButtons';

export default {
    components: {
        RadioButtons,
    },

    data() {
        return {
            buttons: [
                {
                    name: 'Release Date',
                    value: 'releaseDate',
                },
                 {
                    name: 'Rating',
                    value: 'rating',
                },
            ],
            label: 'Sort By',
            sortBy: 'releaseDate',
        }
    }
}
</script>


<style lang="scss">
    section.section.filter-bar {
        background-color: #373737;
        margin-bottom: 30px;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

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

