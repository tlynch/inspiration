<template>
  <div id="app">
    <Triangle :gradient="T[0]"/>
    <Triangle :gradient="T[1]"/>
    <Intro/>
    <Word :word="word"/>
  </div>
</template>

<script>
// imports + requires
import Triangle from './components/Triangle.vue'
import Intro from './components/Intro.vue'
import Word from './components/Word.vue'
var seedrandom = require('seedrandom')  // seeded rng
var l = require('./assets/words.js').list // list of words

// generate seed (this monday's date)
const now = new Date()
now.setUTCDate(now.getUTCDate() - ((now.getUTCDay()||7) - 1))
const d = now.toLocaleDateString('en-CA', { timeZone: 'UTC' })  // YYYY-MM-DD
// get rng seeded using monday date
const rng = seedrandom(d)
// get random index
const i = Math.floor(rng() * (l.length))
// get rotations: [-180, 180)
const r = [(rng() * 360) - 180, (rng() * 360) - 180]
// get colours (hue): [0, 360)
const c = [(rng() * 360), (rng() * 360)]
// get positions (offset): [40, 60)
const p = [(rng() * 10) + 40, (rng() * 10) + 40]

// build css for gradients
// FIXME this could be DRYier
const g = [
  "linear-gradient("+r[1]+"deg,transparent "+p[1]+"%,hsl("+c[1]+",90%,80%)"+p[1]+"%) no-repeat",
  "linear-gradient("+r[0]+"deg,hsl("+c[0]+",90%,80%)"+p[0]+"%,transparent "+p[0]+"%) no-repeat"
]

// vue stuff
export default {
  name: 'app',
  components: {
    Triangle,
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

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css?family=Roboto:300i,700');

/* reset */
body {
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
}

/* cutout text */
.cutout {
  color: white;
  background: black;
  mix-blend-mode: multiply;
}
</style>
