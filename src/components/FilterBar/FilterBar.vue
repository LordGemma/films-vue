<template>
    <section class="section filter-bar">
        <div class="container">
            <div class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>{{total}}</strong> movies found
                    </p>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <div class="level-item">
                        <RadioButtons
                            @clicked='sortFilmsBy'
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
import RadioButtons from '@/components/Button/RadioButtons';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        RadioButtons,
    },

    computed: mapState({
        total: state => state.films.total,
        sortBy: state => state.films.params.sortBy,
    }),

    data() {
        return {
            buttons: [
                {
                    name: 'Release Date',
                    value: 'release_date',
                },
                 {
                    name: 'Rating',
                    value: 'vote_average',
                },
            ],
            label: 'Sort By',
        }
    },

    methods:  {
        sortFilmsBy(value) {
            this.$store.dispatch('films/sortFilmsBy', value)
        }
    }
}
</script>


<style lang="scss">
    section.section.filter-bar {
        background-color: #373737;
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

