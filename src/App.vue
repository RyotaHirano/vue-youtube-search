<template>
  <div id="app">
    <search-input></search-input>
    <router-view></router-view>
  </div>
</template>

<script>
  import searchInput from './components/searchInput'
  export default {
    name: 'app',
    components: {
      searchInput
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }

  * {
    box-sizing: border-box;
  }
</style>
