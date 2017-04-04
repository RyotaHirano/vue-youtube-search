<template>
  <div class="c-list-item">
    <div class="c-movie"
    >
      <h2>{{video.title}}</h2>
      <iframe width="560" height="315" :src="youtubeUrl" frameborder="0" allowfullscreen v-on:load="test()"></iframe>
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
        const url = `${base}${this.id}`;
        this.allVideoIsLoaded(url);
        return url
      }
    },
    methods: {
      allVideoIsLoaded: function(url) {
        const totalVideo = this.$store.state.totalVideolength;
        console.log(url);
      },
      test: function() {
        console.log('test');
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