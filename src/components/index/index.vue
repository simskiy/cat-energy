<template lang="pug">
  main
    app-header
    app-categories
</template>

<script>
import appHeader from './header.vue'
import appCategories from './categories.vue'
export default {
  components: {
    appHeader,
    appCategories
  }
}
</script>

<style lang="scss">
</style>
