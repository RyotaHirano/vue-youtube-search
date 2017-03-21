<template>
  <input type="text" v-model="searchText">
</template>

<script>
  export default {
    name: 'search-input',
    computed: {
      searchText: {
        get() {
          return this.$store.state.searchText
        },
        set(value) {
          this.$store.commit('updateSearchText', value)
        }
      }
    }
  }
</script>