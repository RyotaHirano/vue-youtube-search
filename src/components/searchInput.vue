<template>
  <input type="text" @input="updateSearchText">
</template>

<script>
  import { debounce } from 'lodash'
  const inputDebounceTimer = 1000;

  export default {
    name: 'search-input',
    methods: {
      updateSearchText: debounce(function(e) {
        this.$store.commit('updateSearchText', e.target.value)
      }, inputDebounceTimer)
    }
  }
</script>