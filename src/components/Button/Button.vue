<template>
    <b-button 
        v-bind:type="`is-${btnType}`" 
        v-bind:size="`is-${btnSize}`"
        style={...btnCustomStyle}
        @click="handleClick"
    >
        {{ btnText }}
    </b-button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnType: {
            type: String,
            default: 'text',
        },
        btnSize: {
            type: String,
            default: '',
        },
        btnText: {
            type: String,
            required: true,
        },
        btnCustomStyle: {
            type: Object,
            default: () => {},
        },
        handleAction: Function,
    },

     methods: {
            handleClick() {
                this.$emit('handleAction');
            }
        }
}
</script>

<style lang="scss" scoped>
    button.button {
        background-color: #f65261;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        transition: all 0.3s linear;
        &:hover, 
        &:active,
        &:focus {
            background-color: #f65261;
            box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .5);
            color: white;
        }
    }
</style>


