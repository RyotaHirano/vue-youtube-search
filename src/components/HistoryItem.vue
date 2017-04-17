<template>
  <li class="c-history-item">
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
  .c-history-item {
    font-size: 14px;
    font-style: italic;
    word-break: break-all;
    padding-bottom: 5px;
    & + & {
      padding-top: 5px;
      border-top: solid 1px #eee;
    }
  }
</style>