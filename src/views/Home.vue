<template>
  <div class="home">
    <Header />
    <FilterBar />
    <Main />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';

export default {
  name: 'home',
  components: {
    Header,
    FilterBar,
    Main,
    Footer,
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>

