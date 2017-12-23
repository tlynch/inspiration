<template>
<div id="word" class="cutout">{{ word }}</div>
</template>

<script>
// imports
var seedrandom = require('seedrandom')  // seeded rng
//TODO get full list, put in separate file + import/require
var l = ['Truth', 'Breathe']  // list of words

// generate seed (this monday's date)
var now = new Date()
now.setUTCDate(now.getUTCDate() - (now.getUTCDay() - 1))  // TODO think through this logic
var d = now.toDateString()
// get rng seeded using monday date
var rng = seedrandom(d)
// get random index
var i = Math.floor(rng() * (l.length))

export default {
  name: 'word',
  data() {
    return {
      word: l[i]  // weekly random word
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
