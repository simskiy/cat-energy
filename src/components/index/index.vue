<template lang="pug">
  main
    app-header
    app-categories
    app-advantages
    app-compare
</template>

<script>
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
  }
}
</script>

<style lang="scss">
</style>
