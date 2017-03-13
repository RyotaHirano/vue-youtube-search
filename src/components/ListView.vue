<template>
  <div>
    <list-item
      v-for="video in filteringVideos"
      :video="video"
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
      filteringVideos() {
        let videos = this.videos.concat()

        return videos
      }
    },
    components: {
      'list-item': ListItem
    }
  }
</script>