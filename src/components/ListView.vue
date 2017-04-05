<template>
  <div>
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
    <div
      v-show="!allowShowVideos && !isLoadingVideos"
    >
      <p>Please input search keywords.</p>
    </div>
    <div
      v-show="!allowShowVideos && isLoadingVideos"
    >
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'
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
    },
    components: {
      'list-item': ListItem
    }
  }
</script>