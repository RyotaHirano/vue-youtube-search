<template>
  <div class="l-sidebar">
    <div class="c-sidebar">
      <h3 class="c-history-title"
          v-once
      >
        history
      </h3>
      <ul class="c-history-list">
        <history-item
          v-for="(word, key) in getHistorySearchWords"
          :word=word
          :key="key"
        >
        </history-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HistoryItem from '../components/HistoryItem.vue'

  export default {
    computed: {
      ...mapGetters([
        'getHistorySearchWords'
      ])
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
      width: 120px;
      margin-right: 0;
      padding: 0 15px;
    }
  }

  .c-sidebar {
    padding-top:84px;
    @media screen and (max-width: 960px) {
      padding-top: 40px;
    }
  }

  .c-history-title {
    font-size: 16px;
    line-height: 1.4;
    @media screen and (max-width: 960px) {
      font-size: 14px;
    }
  }

  .c-history-list {
    list-style: none;
    margin: 0;
    padding: 20px 15px;
    @media screen and (max-width: 960px) {
      padding: 10px;
    }
  }
</style>