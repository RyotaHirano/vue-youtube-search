<template>
  <div class="c-list-item">
    <div class="c-movie">
      <h2>{{video}}</h2>
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