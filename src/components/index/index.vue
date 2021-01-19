<template lang="pug">
  main
    app-header
    app-categories
    app-advantages
</template>

<script>
import appHeader from './header.vue'
import appCategories from './categories.vue'
import appAdvantages from './advantages.vue'
export default {
  components: {
    appHeader,
    appCategories,
    appAdvantages
  }
}
</script>

<style lang="scss">
</style>
