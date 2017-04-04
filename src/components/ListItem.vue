<template>
  <div class="c-list-item">
    <div class="c-movie"
    >
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
      }
    },
    methods: {
      videoLoaded: function() {
        this.$store.dispatch('updateLoadedVideoNum');
        parseInt(this.$store.state.loadedVideoNum, 10) === parseInt(this.$store.state.videos.length, 10) ? this.$store.dispatch('allowShowVideos') : false ;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-list-item {
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
</style>