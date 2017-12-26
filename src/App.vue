<template>
<div id="app">
  <div class="triangle" :style="T[0]"></div>
  <div class="triangle" :style="T[1]"></div>
  <intro></intro>
  <word :word="word"></word>
</div>
</template>

<script>
// imports
import Intro from './components/Intro.vue'
import Word from './components/Word.vue'
var seedrandom = require('seedrandom')  // seeded rng

//TODO get full list, put in separate file + import/require
var l = ['Truth', 'Breathe']  // list of words

// generate seed (this monday's date)
var now = new Date()
now.setUTCDate(now.getUTCDate() - ((now.getUTCDay()||7)  - 1))
var d = now.toDateString()
// get rng seeded using monday date
var rng = seedrandom(d)
// get random index
var i = Math.floor(rng() * (l.length))
// get rotations: [-180, 180)
var r = [(rng() * 360) - 180, (rng() * 360) - 180]
// get colours (hue): [0, 360)
var c = [(rng() * 360), (rng() * 360)]
// get positions (offset): [40, 60)
var p = [(rng() * 10) + 40, (rng() * 10) + 40]

// build css for gradients
// FIXME this could be DRYier
var g = [
  "linear-gradient("+r[0]+"deg,hsl("+c[0]+",90%,80%)"+p[0]+"%,transparent "+p[0]+"%) no-repeat",
  "linear-gradient("+r[1]+"deg,transparent "+p[1]+"%,hsl("+c[1]+",90%,80%)"+p[1]+"%) no-repeat"
]

export default {
  name: 'app',
  components: {
    Intro,
    Word
  },
  data() {
    return {
      word: l[i],
      T: [
        { background: g[0] },
        { background: g[1] }
      ]
    }
  }
}
</script>

<style lang="stylus">
// fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:300i,700')

// reset
body
  margin 0
#app
  height 100%
  width 100%

// cutout text
.cutout
  color white
  background black
  mix-blend-mode multiply

// backgrounds
.triangle
  // position + size
  position absolute
  width 100%
  height 100%
</style>
