<template>
  <div class="l-sidebar">
    <div class="c-sidebar">
      <h3 class="c-history-title">
        history
      </h3>
      <ul class="c-history-list">
        <history-item
          v-for="(word, key) in getHistorySearchWords"
          :word="word"
          :key="key"
        >
        </history-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import HistoryItem from '../components/HistoryItem.vue'

  export default {
    computed: {
      getHistorySearchWords: function() {
        return this.$store.state.historySearchWords
      }
    },
    components: {
      HistoryItem
    }
  }
</script>

<style lang="scss" scoped>
  .l-sidebar {
    width: 200px;
    margin-right: 50px;

    @media screen and (max-width: 960px) {
      margin-right: 0;
    }
  }

  .c-sidebar {
    padding-top:84px;
  }

  .c-history-title {
    font-size: 1em;
    line-height: 1.4;
  }

  .c-history-list {
    list-style: none;
    margin: 0;
    padding: 20px 15px;
  }
</style>