<template>
  <div class="c-input-wrapper"
       :class="inputWrapClassObject"
  >
    <input class="c-input" type="text" placeholder="search keyword..." v-on:keyup="chkSearchInputlength($event)" @input="updateSearchText" v-on:focus="focusInput()" v-on:focusout="focusoutInput()">
  </div>
</template>

<script>
  import { debounce } from 'lodash'
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
        e.target.value !== '' ? this.$store.dispatch('isLoadingVideos', true) : this.$store.dispatch('isLoadingVideos', false);
      },
      updateSearchText: debounce(function(e) {
        this.$store.dispatch('updateSearchText', e.target.value);
        this.$store.dispatch('fetchYouTubeVideos');
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
    display: inline-block;
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
  }

  .c-input {
    font-size: 18px;
    line-height: 20px;
    padding: 10px 6px;
    outline: none;
    border: none;
  }
</style>