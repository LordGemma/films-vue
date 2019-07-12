<template>
  <div class="home">
    <Header>
      <template v-slot:content>
        <h2 class="search-title">Find Your Movie</h2>
        <Search />
      </template>
    </Header>
    <FilterBar />
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import Main from '@/components/Main/Main';
import Search from '@/components/Search/Search';

export default {
  name: 'home',
  components: {
    Header,
    FilterBar,
    Main,
    Search,
  }
}
</script>

