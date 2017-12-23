<template>
<div id="app">
  <intro></intro>
  <word></word>
</div>
</template>

<script>
import Intro from './components/Intro.vue'
import Word from './components/Word.vue'

export default {
  name: 'app',
  components: {
    Intro,
    Word
  },
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
#app::before, #app::after
  // position + size
  display block
  position absolute
  content ''
  width 100%
  height 100%
  z-index -1
// TODO randomly generate these
// shape + colour
#app::before
  background linear-gradient(-55deg,#CAB4FA 48%,transparent 48%) no-repeat
#app::after
  background linear-gradient(25deg,transparent 52%,#70A6E5 52%) no-repeat
</style>
