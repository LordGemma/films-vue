<template>
    <header>
        <div class="container">
            <section>
                <Logo />
            </section>
            <section>
                <h2 class="search-title">Find Your Movie</h2>
                <Search />
            </section>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/Logo/Logo';
import Search from '@/components/Search/Search';

export default {
    name: 'Header',
    components: {
        Logo,
        Search,
    }
}
</script>

<style lang="scss">
header {
    min-height: 20vh;
    max-height: 380px;
    background-image: url('../../assets/header-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 0 0 60px 0;

    .search-title {
        font-size: 32px;
        color: white;
        text-transform: uppercase;
        font-weight: 100;
        margin: 40px 0;
    }
}
</style>


