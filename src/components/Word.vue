<template>
<div id="word" class="cutout">{{ word }}</div>
</template>

<script>
// TODO: get random word from list
var rand = 'Truth'

export default {
  name: 'word',
  data() {
    return {
      word: rand
    }
  }
}
</script>

<style lang="stylus">
#word
  // font
  font-family 'Roboto', sans-serif
  font-weight bold
  font-size 100px
  font-variant small-caps

  // size + position
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
  padding 0 25px
</style>
