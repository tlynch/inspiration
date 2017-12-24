<template>
<div id="intro" class="cutout">{{ msg }}</div>
</template>

<script>
export default {
  name: 'intro',
  data() {
    return {
      msg: "This week's word is..."
    }
  }
}
</script>

<style lang="stylus">
#intro
  // font
  font-family 'Roboto', sans-serif
  font-weight 300
  font-style italic
  font-size 35px

  // size + position
  position absolute
  top 50px
  left 100px
  padding 0 15px
</style>
