<template>
  <div class="c-list-item">
    <div class="c-movie">
      <h2>{{video.title}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      video: Object
    }
  }
</script>