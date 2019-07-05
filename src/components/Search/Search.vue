<template>
    <div class="search">
        <b-field grouped>
            <b-input 
                placeholder="Search..." 
                v-model="searchText" 
                expanded
                @keyup.enter="handleSearch"
            ></b-input>
            <p class="control">
                <Button 
                    btnText='Search'
                    @handleAction='handleSearch'
                    :btnCustomStyle='serachBtnStyle'
                />
            </p>
        </b-field>
        <div class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <RadioButtons
                        @clicked='handleClick'
                        :label='label' 
                        :selectBy='searchBy' 
                        :buttons='buttons'
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../Button/Button';
import RadioButtons from '../Button/RadioButtons';

export default {
    components: {
        Button,
        RadioButtons,
    },

    computed: {
        searchText: {
            get() {
                return this.$store.state.films.searchParams.search;
            },
            set(value) {
                this.$store.commit('films/setSearchText', value)
            }
        },
        searchBy: {
            get() {
                return this.$store.state.films.searchParams.searchBy;
            },
            set(value) {
                this.$store.commit('films/setSearchByValue', value);
            }
        }
    },

    methods: {
        handleSearch() {
            const isQueryParamsExist = this.searchText.length > 0; 
            let params = {}
            if(isQueryParamsExist) {
                params = {search: this.searchText, searchBy: this.searchBy};
            }
            this.$router.replace({query: params})
            this.$store.dispatch('films/searchFilms');
        },

        handleClick(value) {
            this.$store.commit('films/setSearchByValue', value);
        }
    },

    watch: {
        // call again the method if the route changes
        '$route': 'handleSearch'
    },

    data() {
        return {
            serachBtnStyle: {
                width: '200px',
                fontSize: '20px',
                lineHeight: '1.2',
                minHeight: '49px',
            },
            buttons: [
                {
                    name: 'Title',
                    value: 'title',
                },
                 {
                    name: 'Genre',
                    value: 'genres',
                },
            ],
            label: 'Search By',
        }
    }
}
</script>

<style lang="scss">
.search {
    .input {
      background-color: rgba(0, 0, 0, .7);
      box-shadow: none;
      border: none;
      color: white;
      padding: 15px 10px;
      font-size: 16px;
      line-height: 1.2;
      height: auto;
    }

    input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #606060;
        opacity: 1; /* Firefox */
    }
}
</style>


