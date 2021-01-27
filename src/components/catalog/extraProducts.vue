<template lang="pug">
  section.products
    h2.products__title Дополнительные товары
    ul.products__list
      li(
        v-for="(extra, index) in extraItems"
        :key="index"
        is="extraItem"
        :title="extra.title"
        :name="extra.name"
        :price="extra.price"
      )
      li(
        is="giftItem"
      )
</template>

<script>
import { extraItems } from '../../assets/products.js'
import extraItem from './extraProductsItem.vue'
import giftItem from './giftItem.vue'
export default {
  data () {
    return {
      extraItems
    }
  },
  components: {
    extraItem,
    giftItem
  }
}
</script>

<style lang="sass" scoped>
.products
  &__list
    list-style: none
    padding: 0
    margin: 0
  &__title
    padding-left: 20px
    padding-right: 20px
    position: relative
    font-size: 24px
    font-weight: 400
    color: $color-black
    line-height: 85px
    margin-top: 0
    margin-bottom: 0

    &::after
      content: ''
      display: block
      position: absolute
      height: 3px
      top: 45px
      left: 267px
      right: 0
      background-color: $color-green
</style>
