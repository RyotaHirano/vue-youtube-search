<template>
  <div class="c-list-items">
    <list-item
      v-for="(video, key) in fetchVideos"
      :video="video.snippet"
      :key="key"
    >
    </list-item>
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
        this.$store.dispatch('fetchYouTubeVideos')
        return this.$store.state.videos
      }
    },
    components: {
      'list-item': ListItem
    }
  }
</script>