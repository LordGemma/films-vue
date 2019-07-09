<template>
  <div class="home">
    <Header>
      <h2 class="search-title">Find Your Movie</h2>
      <Search />
    </Header>
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
import Search from '@/components/Search/Search';
import Footer from '@/components/Footer/Footer';

export default {
  name: 'home',
  components: {
    Header,
    FilterBar,
    Main,
    Search,
    Footer,
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>

