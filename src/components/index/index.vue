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
    this.$nextTick(function () {
      window.addEventListener('resize', this.setColor)
      this.setColor()
    })
  },
  methods: {
    setColor (event) {
      eventEmitter.$emit('changeBgColorFooter', '#fff')
      if (window.innerWidth < 1220) {
        eventEmitter.$emit('changeTextColorNav', '#000')
        eventEmitter.$emit('changeBorderColor', '#68b738')
      } else {
        eventEmitter.$emit('changeTextColorNav', '#fff')
        eventEmitter.$emit('changeBorderColor', '#fff')
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setColor)
  }
}
</script>

<style lang="scss">
</style>
