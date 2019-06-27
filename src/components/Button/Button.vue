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
            default: 'primary',
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
        text-transform: uppercase;
    }
</style>


