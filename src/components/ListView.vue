<template>
  <div>
    <div class="l-none-videos-msg"
      v-show="!allowShowVideos && !isLoadingVideos"
    >
      <p class="c-none-videos-msg" v-show="!hasSearchText">Please input search keyword.</p>
      <p class="c-none-videos-msg" v-show="hasSearchText">No results for <span class="u-strong">{{this.$store.state.searchText}}</span></p>
    </div>
    <div
      class="preloader"
      v-show="isLoadingVideos"
    >
      <div class="l-preloader"
           :class="pseudoLoaderClass()"
      >
        <span class="c-preloader"></span>
      </div>
    </div>
    <div
      class="c-list-items"
    >
      <list-item
        v-for="(video, key) in fetchVideos"
        :video="video.snippet"
        :id="video.id.videoId"
        :key="key"
        :data-index="key"
      >
      </list-item>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem'

  export default {
    props: {
      videos: Array
    },
    computed: {
      fetchVideos: function() {
        return this.$store.state.videos
      },
      allowShowVideos: function() {
        return this.$store.state.allowShowVideos
      },
      isLoadingVideos: function() {
        return this.$store.state.isLoadingVideos
      },
      hasSearchText: function() {
        return this.$store.state.searchText.length > 0 ? true : false ;
      },
    },
    methods: {
      pseudoLoaderClass: function() {
        return {
          'fade-out': this.$store.state.allowShowVideos
        }
      },
    },
    components: {
      'list-item': ListItem
    }
  }
</script>

<style lang="scss" scoped>
  @mixin pseudo-preloader($width: 30px, $height: 30px, $bgc: #000, $animation-duration: 1.2s, $animation-delay: 0s) {
    content: '';
    width: $width;
    height: $height;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    background-color: $bgc;
    opacity: 0;
    transform: scale(0);
    animation-name: preloading;
    animation-duration: $animation-duration;
    animation-delay: $animation-delay;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  $preloader-width: 80px;
  $preloader-height: 80px;

  // -----------------------------------

  // none videos
  .l-none-videos-msg {
    max-width: 850px;
    margin: 40px auto;

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
  }

  // preloader
  .preloader {
    pointer-events: none;
  }

  .l-preloader {
    width: $preloader-width;
    height: $preloader-height;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    opacity: 1;
    transition: opacity .8s ease;

    &.fade-out {
      opacity: 0;
    }
  }

  .c-preloader {
    width: $preloader-width;
    height: $preloader-height;
    position: relative;

    &::before {
      @include pseudo-preloader($preloader-width, $preloader-height);
    }
    &::after {
      @include pseudo-preloader($preloader-width, $preloader-height, #000, 1.2s, -.6s);
    }
  }

  @keyframes preloading {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(1)
    }
  }

  // c-list-items
  .c-list-items {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 0 30px;

    @media screen and (max-width: 960px) {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 0 15px;
    }
  }

  .u-strong {
    font-weight: bold;
    text-decoration: underline;
  }
</style>