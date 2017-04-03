<template>
  <transition-group
    name="slide-fade"
    tag="div"
    class="c-list-items"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="show"
    v-on:leave="hide"
  >
    <list-item
      v-for="(video, key) in fetchVideos"
      :video="video.snippet"
      :id="video.id.videoId"
      :key="key"
      :data-index="key"
    >
    </list-item>
  </transition-group>
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
      }
    },
    methods: {
      beforeEnter: function(el) {
        el.style.opacity = 0
      },
      show: function(el, done) {
        const delay = el.dataset.index * 150;
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1 },
            { complete: done }
          )
        }, delay)
      },
      hide: function(el, done) {
        const delay = el.dataset.index * 150;
        setTimeout(function () {
          Velocity(
            el,
            { opacity: 0 },
            { complete: done }
          )
        }, delay)
      }
    },
    components: {
      'list-item': ListItem
    }
  }
</script>