<template>
  <div id="word" class="cutout">{{ this.word }}</div>
</template>

<script>
export default {
  name: 'word',
  props: [ 'word' ]
}
</script>

<style scoped>
#word {
  /* font */
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 70px;
  font-variant: small-caps;

  /* size + position */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0 25px;
}
</style>
