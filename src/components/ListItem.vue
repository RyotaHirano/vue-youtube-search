<template lang="pug">
  .c-list-item(:class="listItemClassObject")
    .c-movie
      h2 {{video.title}}
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
    opacity: 0;
    transition: none;
    transition-delay: 0s;
    & + .c-list-item {
      margin-top: 20px;
    }
  }

  .c-movie {
    h2 {
      font-size: 20px;
      margin: 0;
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