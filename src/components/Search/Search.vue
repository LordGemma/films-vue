<template>
    <div class="search">
        <b-field grouped>
            <b-input placeholder="Search..." expanded></b-input>
            <p class="control">
                <Button 
                    btnText='Search'
                    @handleAction='handleSearch'
                />
            </p>
        </b-field>
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span>Search By</span>
                    <b-field>
                        <b-radio-button v-model="searchBy"
                            native-value="title">
                            <span>Title</span>
                        </b-radio-button>

                        <b-radio-button v-model="searchBy"
                            native-value="genre">
                            <span>Genre</span>
                        </b-radio-button>
                    </b-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../Button/Button';

export default {
    components: {
        Button,
    },

    methods: {
        handleSearch() {
            console.log("Hello");
        }
    },

    data() {
        return {
            searchBy: 'title'
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
    
    .level {
        .level-left {
            span {
                color: white;
                text-transform: uppercase;
            }
            .b-radio {
                text-transform: uppercase;
            }
        }
    }
}
</style>


