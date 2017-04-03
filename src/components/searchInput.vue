<template>
  <input class="input" type="text" placeholder="search keyword" @input="updateSearchText">
</template>

<script>
  import { debounce } from 'lodash'
  const inputDebounceTimer = 1000;

  export default {
    name: 'search-input',
    methods: {
      updateSearchText: debounce(function(e) {
        this.$store.dispatch('updateSearchText', e.target.value)
        this.$store.dispatch('fetchYouTubeVideos');
      }, inputDebounceTimer)
    }
  }
</script>

<style lang="scss" >
  .input {
    font-size: 18px;
    line-height: 20px;
    padding: 10px 6px;
    outline: none;
  }
</style>