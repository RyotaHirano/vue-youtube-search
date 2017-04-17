<template>
  <li class="c-search-item">
    {{ word }}
  </li>
</template>

<script>
  export default {
    props: {
      word: String
    }
  }
</script>

<style lang="scss" scoped>
  .c-search-item {
    font-size: 14px;
    font-style: italic;
    & + & {
      margin-top: 5px;
    }
  }
</style>