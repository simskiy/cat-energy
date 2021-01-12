<template lang="pug">
  nav.menu
    .menu__header
      img(src="./img/logo_mobile.svg", alt="Логотип Кэт Энерджи")
      img(src="./img/logo_mobile_header.svg", alt="Кэт Энерджи")
      button.menu__btn burger menu
    ul.menu__list
      menuItem.menu__item(href='/', title='Главная')
      menuItem.menu__item(href='/catalog', title='Каталог продукции')
      menuItem.menu__item(href='/form', title='Подбор программы')
</template>

<script>
import menuItem from './menu-item.vue'

export default {
  components: {
    menuItem
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .menu
    width: 100%

    &__header
      display: flex
      padding-left: 20px
      padding-right: 20px
      justify-content: space-between
      align-items: center
      height: 65px
      border: 1px solid $border-color
    &__btn
    &__list
      list-style: none
      padding: 0
      margin: 0
    &__item

  +md-block()
    .menu__list
      display: flex
</style>
