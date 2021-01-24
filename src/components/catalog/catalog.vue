<template lang="pug">
  include ../../Pug/picture
  main.catalog
    h1.catalog__title Каталог продукции
    section.catalog.products
      h2.unvis Продукция
      ul.catalog__list
        app-item.catalog__item(
          :title="title"
          :type="type.pro"
          :size="size.small"
          :taste="taste.chicken"
          :price="price.proSmall"
          image="catalog_1"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.pro"
          :size="size.big"
          :taste="taste.chicken"
          :price="price.proBig"
          image="catalog_2"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.pro"
          :size="size.small"
          :taste="taste.fish"
          :price="price.proSmall"
          image="catalog_3"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.pro"
          :size="size.big"
          :taste="taste.fish"
          :price="price.proBig"
          image="catalog_4"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.slim"
          :size="size.small"
          :taste="taste.buckwheat"
          :price="price.slimSmall"
          image="catalog_5"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.slim"
          :size="size.big"
          :taste="taste.buckwheat"
          :price="price.slimBig"
          image="catalog_6"
        )
        app-item.catalog__item(
          :title="title"
          :type="type.slim"
          :size="size.small"
          :taste="taste.rice"
          :price="price.slimRice"
          image="catalog_7"
        )
        show-more

</template>

<script>
import appItem from './catalogItem.vue'
import showMore from './showMore.vue'
export default {
  data () {
    return {
      title: 'Cat Energy',
      type: {
        slim: 'Slim',
        pro: 'Pro'
      },
      size: {
        small: 500,
        big: 1000
      },
      taste: {
        chicken: 'Курица',
        fish: 'Рыба',
        buckwheat: 'Гречка',
        rice: 'Рис'

      },
      price: {
        proSmall: 700,
        proBig: 1000,
        slimSmall: 400,
        slimBig: 700,
        slimRice: 500
      }
    }
  },
  components: {
    appItem,
    showMore
  }
}
</script>

<style lang="sass" scoped>
.catalog
  &__title
    display: flex
    justify-content: space-around
    align-items: center
    height: 104px
    font-size: 36px
    font-weight: 400
    margin: 0
    color: $color-black
    border-bottom: 1px solid $color-line
  &__list
    list-style: none
    padding: 0
    margin: 0
  &__item
    padding-left: 20px
    padding-right: 20px
    padding-bottom: 25px
    border-bottom: 1px solid $color-line
</style>
