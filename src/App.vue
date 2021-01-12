<template lang="pug">
  #app
    main-menu
    router-view
    app-footer
</template>

<script>
import mainMenu from './components/mainMenu/main-menu.vue'
import appFooter from './components/footer/appFooter.vue'

export default {
  components: {
    mainMenu,
    appFooter
  }
}
</script>

<style lang="sass">

</style>
