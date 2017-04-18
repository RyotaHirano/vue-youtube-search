<template>
  <li class="c-history-item"
      v-html="this.replaceWords(word)"
  >
  </li>
</template>

<script>
  import replaceWords from '../util/replaceWords'
  import randomShow from '../util/randomShow'

  export default {
    props: {
      word: String
    },
    methods: {
      replaceWords: function(word) {
        const el = replaceWords(word);
        this.$store.state.historyTextTimer = setTimeout(() => {
          this.randomShow(this.$el);
        }, 2000);
        return el;
      },
      randomShow: function(el) {
        const targets = el.querySelectorAll(`.u-random-word`);
        targets.forEach((el, i) => {
          new randomShow(el);
        })
      },
    }
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
      border-top: solid 1px #eee;
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
        /*display: none;*/
      }
    }
  }
</style>