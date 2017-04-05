<template>
  <div class="c-list-item"
       :class="listItemClassObject"
  >
    <div class="c-movie">
      <h2>{{video.title}}</h2>
      <iframe width="560" height="315" :src="youtubeUrl" v-on:load="videoLoaded()" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
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
        return parseInt(this.$store.state.loadedVideoNum, 10) === parseInt(this.$store.state.videos.length, 10) ? this.$store.dispatch('allowShowVideos', true) : false ;
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
  .fade-in {
    opacity: 1;
    transition: opacity .5s ease;

    &[data-index="0"] {
      transition-delay: 0s;
    }
    &[data-index="1"] {
      transition-delay: .1s;
    }
    &[data-index="2"] {
      transition-delay: .2s;
    }
    &[data-index="3"] {
      transition-delay: .3s;
    }
    &[data-index="4"] {
      transition-delay: .4s;
    }
    &[data-index="5"] {
      transition-delay: .5s;
    }
  }
</style>