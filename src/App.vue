<template lang="pug">
  #app
    main-menu
    router-view
</template>

<script>
import mainMenu from './components/main-menu.vue'

export default {
  components: {
    mainMenu
  }
}
</script>

<style lang="scss">

</style>
