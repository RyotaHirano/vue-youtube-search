<template>
  <div>
    <search-message></search-message>
    <div
      class="preloader"
      v-show="isLoadingVideos"
    >
      <div class="l-preloader"
           :class="pseudoLoaderClass()"
      >
        <span class="c-preloader"
              v-once
        ></span>
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
  import SearchMessage from './SearchMessage'

  export default {
    props: {
      videos: Array
    },
    computed: {
      fetchVideos: function() {
        return this.$store.state.videos
      },
      isLoadingVideos: function() {
        return this.$store.state.isLoadingVideos
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
      'list-item': ListItem,
      'search-message': SearchMessage
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
    padding: 0;

    @media screen and (max-width: 960px) {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 0 15px;
    }
  }
</style>
