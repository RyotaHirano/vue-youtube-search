<template>
  <div id="app">
    <header class="header">
      <h1>Vue Youtube Search</h1>
    </header>
    <div class="l-container">
      <sidebar></sidebar>
      <div class="l-main">
        <search-input></search-input>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebar from './components/Sidebar'
  import searchInput from './components/searchInput'
  export default {
    name: 'app',
    components: {
      sidebar,
      searchInput
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700');

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
    max-width: 960px;
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

  .l-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
  }

  .l-main {
    width: 100%;
  }
</style>
