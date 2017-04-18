<template>
  <div class="c-input-wrapper"
       :class="inputWrapClassObject"
  >
    <input type="text" class="c-input" placeholder="search keyword..." v-on:input="chkSearchInputlength($event)" @input="updateSearchText" v-on:focus="focusInput()" v-on:focusout="focusoutInput()">
  </div>
</template>

<script>
  import { debounce } from 'lodash'
  import U_fetchYouTubeVideos from '../util/fetchYouTubeVideos'
  const inputDebounceTimer = 1000;

  export default {
    name: 'search-input',
    computed: {
      inputWrapClassObject: function() {
        return {
          'is-focus': this.$store.state.isFocusSearchInput
        }
      },
    },
    methods: {
      chkSearchInputlength: function(e) {
        this.$store.dispatch('resetFetchVideos');
        this.$store.dispatch('isLoadingVideos', false);
        this.$store.dispatch('allowShowVideos', false);
        this.$store.dispatch('updateSearchText', e.target.value);

        if (e.target.value !== '') {
          this.$store.dispatch('isLoadingVideos', true)
        } else {
          this.$store.dispatch('clearHistoryTextTimer')
        }
      },
      updateSearchText: debounce(function(e) {
        if(e.target.value !== '') {
          U_fetchYouTubeVideos(this.$store)
        } else {
          this.$store.dispatch('clearHistoryTextTimer')
        }
      }, inputDebounceTimer),
      focusInput: function() {
        this.$store.dispatch('isFocusSearchInput', true)
      },
      focusoutInput: function() {
        this.$store.dispatch('isFocusSearchInput', false)
      },
    }
  }
</script>

<style lang="scss" scoped>
  @mixin inputBorderBottom {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    transform-origin: left;
  }

  .c-input-wrapper {
    width: 100%;
    max-width: 960px;
    margin: 40px auto 0;
    display: block;
    position: relative;
    &::before {
      @include inputBorderBottom;
      background-color: #eee;
    }

    &::after {
      @include inputBorderBottom;
      background-color: #42b983;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .2s ease;
      z-index: 1;
    }

    &.is-focus {
      &::after {
        transform: scaleX(1);
      }
    }

    @media screen and (max-width: 960px) {
      width: auto;
      max-width: none;
      margin: 0 15px;
    }
  }

  .c-input {
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    padding: 10px 6px;
    outline: none;
    border: none;
    font-family: 'Roboto Mono', monospace;
  }
</style>