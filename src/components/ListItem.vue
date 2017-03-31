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

  /* transition */
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 1;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    opacity: 0;
  }
</style>