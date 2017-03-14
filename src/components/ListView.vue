<template>
  <div>
    <list-item
      v-for="(video, key) in videos"
      :video="video"
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