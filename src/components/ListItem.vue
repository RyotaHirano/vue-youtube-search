<template lang="pug">
  .c-list-item(:class="listItemClassObject")
    h2.c-movie-title {{video.title}}
    .c-movie
      iframe(width="560" height="315" v-bind:src="youtubeUrl" v-on:load="videoLoaded()" frameborder="0" allowfullscreen)
</template>

<script>
  import allVideoIsLoaded from '../util/allVideoIsLoaded'

  export default {
    props: {
      video: Object,
      id: String,
    },
    computed: {
      youtubeUrl: function() {
        const base = 'https://www.youtube.com/embed/';
        return `${base}${this.id}`
      },
      listItemClassObject: function() {
        return {
          'fade-in': this.$store.state.allowShowVideos
        }
      }
    },
    methods: {
      videoLoaded: function() {
        this.$store.dispatch('updateLoadedVideoNum');
        if(allVideoIsLoaded(this.$store.state.loadedVideoNum, this.$store.state.videos.length)) {
          return this.$store.dispatch('allowShowVideos', true)
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-list-item {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    opacity: 0;
    transition: none;
    transition-delay: 0s;

    @media screen and (max-width: 960px) {
      max-width: none;
    }

    & + .c-list-item {
      margin-top: 40px;
      padding-top: 40px;
      border-top: 2px solid #ddd;

      @media screen and (max-width: 960px) {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
      }
    }
  }

  .c-movie-title {
    font-size: 20px;
    line-height: 1.6;
    margin: 0 0 5px;
    display: inline-block;

    @media screen and (max-width: 960px) {
      font-size: 2.4vw;
    }
  }

  .c-movie {
    width: 100%;
    height: 0;
    position: relative;
    padding-top: 56.65%;

    iframe {
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
  }

  /* transition */
  $video-item-default-delay: 1.0s;

  .fade-in {
    opacity: 1;
    transition: opacity .5s ease;

    &[data-index="0"] {
      transition-delay: $video-item-default-delay + 0s;
    }
    &[data-index="1"] {
      transition-delay: $video-item-default-delay + .1s;
    }
    &[data-index="2"] {
      transition-delay: $video-item-default-delay + .2s;
    }
    &[data-index="3"] {
      transition-delay: $video-item-default-delay + .3s;
    }
    &[data-index="4"] {
      transition-delay: $video-item-default-delay + .4s;
    }
    &[data-index="5"] {
      transition-delay: $video-item-default-delay + .5s;
    }
  }
</style>