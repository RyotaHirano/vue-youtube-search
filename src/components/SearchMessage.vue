<template>
  <div class="l-none-videos-msg"
       v-show="!allowShowVideos && !isLoadingVideos"
  >
    <p class="c-none-videos-msg" v-show="!hasSearchText">Please input search keyword.</p>
    <p class="c-none-videos-msg" v-show="hasSearchText">No results for <span class="u-strong">{{this.$store.state.searchText}}</span></p>
  </div>
</template>

<script>
  export default {
    computed: {
      allowShowVideos: function() {
        return this.$store.state.allowShowVideos
      },
      isLoadingVideos: function() {
        return this.$store.state.isLoadingVideos
      },
      hasSearchText: function() {
        return this.$store.state.searchText.length > 0 ? true : false ;
      },
    }
  }
</script>

<style lang="scss" scoped>
  // none videos
  .l-none-videos-msg {
    max-width: 960px;
    margin: 40px auto;
    word-break: break-all;

    @media screen and (max-width: 960px) {
      width: auto;
      margin: 0;
      padding: 0 15px;
    }
  }

  .c-none-videos-msg {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    @media screen and (max-width: 960px) {
      margin-top: 15px;
    }
  }

  .u-strong {
    font-weight: bold;
    text-decoration: underline;
  }
</style>