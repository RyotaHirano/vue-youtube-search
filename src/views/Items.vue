<template>
  <div class="c-list-items">
    <list-item
      class="c-list-item"
      :videos="hitVideos"
    >
    </list-item>
  </div>
</template>

<script>
  import ListItem from '../components/ListItem'

  export default {
    name: 'items',
    computed: {
      hitVideos() {
        return this.$store.state.videos
      }
    },
    components: {
      ListItem
    }
  }
</script>