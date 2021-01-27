<template lang="pug">
  section.catalog.products
    h2.unvis Продукция
    ul.catalog__list
      li.catalog__item(
        is="productItem"
        v-for = "(product, index) in products"
        :key="index"
        :title="product.title"
        :type="product.type"
        :size="product.size"
        :taste="product.taste"
        :price="product.price"
        :image="product.image"
      )
      li.catalog__item(
        is="showMore"
      )
</template>

<script>
import productItem from './productItem.vue'
import showMore from './showMore.vue'
import { products } from '../../assets/products.js'
export default {
  data () {
    return {
      products
    }
  },
  components: {
    productItem,
    showMore
  }
}
</script>

<style lang="sass" scoped>
.catalog
  &__list
    list-style: none
    padding: 0
    margin: 0
  &__item
    padding-left: 20px
    padding-right: 20px
    padding-bottom: 25px
    border-bottom: 1px solid $color-line
+md-block
  .catalog
    &__list
    &__item
</style>
