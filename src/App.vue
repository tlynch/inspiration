<template>
<div id="app">
  <div id="pre">{{ pre }}</div>
  <word></word>
</div>
</template>

<script>
import Word from './components/Word.vue'

export default {
  name: 'app',
  components: {
    Word
  },
  data() {
    return {
      pre: "This week's word is..."
    }
  }
}
</script>

<style lang="stylus">
</style>
