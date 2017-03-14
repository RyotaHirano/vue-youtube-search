<template>
  <div class="c-list-items">
    <list-view
      :videos="hitVideos"
    >
    </list-view>
  </div>
</template>

<script>
  import ListView from '../components/ListView'

  export default {
    name: 'items',
    computed: {
      hitVideos() {
        return this.$store.state.videos
      }
    },
    components: {
      ListView
    }
  }
</script>