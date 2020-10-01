<template>
  <div class="triangle" :style="gradient"></div>
</template>

<script>
export default {
  name: 'triangle',
  props: [ 'gradient' ]
}
</script>

<style scoped>
.triangle {
  /* size + position */
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
