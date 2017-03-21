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
