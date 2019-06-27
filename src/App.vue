<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$primary: #f65261 !default;

body, html {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
