<template lang="pug">
  main.catalog
    h1.catalog__title Каталог продукции
    products
    extraProducts

</template>

<script>
import { eventEmitter } from '../../main.js'
import products from './products.vue'
import extraProducts from './extraProducts.vue'
export default {
  components: {
    products,
    extraProducts
  },
  created () {
    eventEmitter.$emit('changeBgColorFooter', '#f2f2f2')
  }
}
</script>

<style lang="sass" scoped>
.catalog
  margin: auto
  &__title
    display: flex
    justify-content: space-around
    align-items: center
    font-size: 36px
    font-weight: 400
    color: $color-black
    height: 105px
    margin: 0
    border-bottom: 1px solid $color-line
+md-block
  .catalog
    &__title
      font-size: 60px

</style>
