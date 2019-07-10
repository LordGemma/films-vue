<template>
    <header class="header">
        <div class="container">
            <section>
                <div class="columns">
                    <div class="column">
                        <Logo />
                    </div>
                    <div class="column is-1 content has-text-right">
                        <slot name="back-button"></slot>
                    </div>
                </div>
            </section>
            <section>
                <slot name="content"></slot>
            </section>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/Logo/Logo';

export default {
    name: 'Header',
    components: {
        Logo,
    }
}
</script>

<style lang="scss">
header.header {
    position: relative;
    min-height: 20vh;
    background-image: url('../../assets/header-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 0 0 60px 0;

    &::after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
    }

    .search-title {
        font-size: 32px;
        color: white;
        text-transform: uppercase;
        font-weight: 100;
        margin: 40px 0;
    }
}
</style>


