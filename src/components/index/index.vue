<template lang="pug">
  main
    app-header
    app-categories
    app-advantages
    app-compare
</template>

<script>
import { eventEmitter } from '../../main.js'
import appHeader from './header.vue'
import appCategories from './categories.vue'
import appAdvantages from './advantages.vue'
import appCompare from './compare.vue'
export default {
  components: {
    appHeader,
    appCategories,
    appAdvantages,
    appCompare
  },
  mounted () {
    eventEmitter.$emit('changeBgColorFooter', '#fff')
    if (window.innerWidth < 1220) {
      eventEmitter.$emit('changeTextColorNav', '#000')
    } else {
      eventEmitter.$emit('changeTextColorNav', '#fff')
    }
  }
}
</script>

<style lang="scss">
</style>
