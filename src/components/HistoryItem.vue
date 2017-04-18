<template>
  <li class="c-history-item"
      v-html="replaceWords(word)"
  >
  </li>
</template>

<script>
  import randomShow from '../util/randomShow'
  import replaceWords from '../util/replaceWords'

  export default {
    props: {
      word: String,
    },
    methods: {
      replaceWords: function(word) {
        return replaceWords(word);
      },
      historySearchWordRandomShow: function(el) {
        const targets = el.querySelectorAll(`.u-random-word`);
        this.$store.state.historyTextTimer = setTimeout(() => {
          targets.forEach((el, i) => {
            new randomShow(el);
          });
          this.$store.dispatch('clearHistoryTextTimer')
        }, 1500)
      },
    },
    mounted() {
      this.historySearchWordRandomShow(this.$el);
    },
  }
</script>

<style lang="scss">
  .c-history-item {
    font-size: 14px;
    font-style: italic;
    word-break: break-all;
    padding-bottom: 5px;
    & + & {
      padding-top: 5px;
    }
  }

  .u-random-word {
    position: relative;
    color: transparent;
    &::before {
      content: '';
      display: block;
      width: 0;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #000;
    }
  }

  .u-state {
    &--1 {
      &::before {
        width: 1px;
      }
    }
    &--2 {
      color: inherit;
      &::before {
        width: 100%;
      }
    }
    &--3 {
      &::before {
        opacity: 0;
        display: none;
      }
    }
  }
</style>