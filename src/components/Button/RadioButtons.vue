<template>
    <div class="radio-button-group">
        <span 
            v-show="label" 
            :label="label" 
            class="group-button-label"
        >
            {{label}}
        </span>
        <b-field>
            <b-radio-button 
                v-for="button in buttons" 
                :key="button.value"
                v-model='relation'
                :native-value='button.value'
                @input="handleChange"
            >
                <span>{{button.name}}</span>
            </b-radio-button>
        </b-field>
    </div>
</template>

<script>
export default {
    props: {
        clicked: Function,
        label: String,
        selectBy: {
            type: String,
            default: () => buttons[0].value,
        },
        buttons: {
            type: Array,
            default: () => [],
            required: true,
        } 
    },

    data() {
        return {
            relation: this.selectBy
        }
    },

    methods: {
        handleChange(value) {
            this.$emit('clicked', value);
        }
    }
}
</script>

<style lang="scss">
.radio-button-group {
    display: flex;
    align-items: center;
    .group-button-label {
        color: white;
        margin-right: 15px;
    }

    .control {
        .b-radio.radio {
            text-transform: uppercase;
            font-size: 14px;
            background-color: rgba(0, 0, 0, .5);
            color: white;
            border-color: transparent;

            &.is-primary {
                background-color: #f65261;
            }
        }
    }
}

</style>


