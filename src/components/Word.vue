<template>
<div id="word" class="cutout">{{ word }}</div>
</template>

<script>
// get monday date
var now = new Date()
now.setUTCDate(now.getUTCDate() - (now.getUTCDay() - 1))  // TODO think through this logic
var d = now.toDateString()
// get rng seeded using monday date
var seedrandom = require('seedrandom')
var rng = seedrandom(d)

// TODO: get random word from list using seeded rng
var l = ['Truth', 'Breathe']
var rand = 'Truth'
console.log(rng())

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
