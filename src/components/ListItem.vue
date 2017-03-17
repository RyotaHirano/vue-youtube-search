<template>
  <div class="c-list-item">
    <div class="c-movie"
    >
      <h2>{{video.title}}</h2>
      <iframe width="560" height="315" :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      video: Object,
      id: String
    },
    computed: {
      youtubeUrl: function() {
        const base = 'https://www.youtube.com/embed/'
        return `${base}/${this.id}`
      }
    }
  }
</script>