<template>
  <div id="app">
    <header class="header">
      <h1>Youtube Search</h1>
    </header>
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
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700');

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

  .header {
    width: 100%;
    max-width: 850px;
    height: 40px;
    margin: 10px auto;

    h1 {
      font-size: 24px;
      line-height: 40px;
      display: inline-block;
      color: #eee;
    }

    @media screen and (max-width: 960px) {
      max-width: none;
      height: 30px;
      padding: 0 15px;

      h1 {
        line-height: 30px;
        font-size: 20px;
      }
    }
  }
</style>
