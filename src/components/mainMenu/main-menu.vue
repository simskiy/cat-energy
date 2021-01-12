<template lang="pug">
  nav.menu
    .menu__header
      img(src="./img/logo_mobile.svg", alt="Логотип Кэт Энерджи")
      img(src="./img/logo_mobile_header.svg", alt="Кэт Энерджи")
      .menu__btn(role="button", :class="{'menu__btn--close': isActive}", @click="isActive = !isActive")
        span
    ul.menu__list(:class="{'menu__list--hide': !isActive}")
      menuItem(href='/', title='Главная')
      menuItem(href='/catalog', title='Каталог продукции')
      menuItem(href='/form', title='Подбор программы')
</template>

<script>
import menuItem from './menu-item.vue'

export default {
  components: {
    menuItem
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="sass">
.menu
  width: 100%
  height: auto

  &__header
    box-sizing: border-box
    display: flex
    padding-left: 20px
    padding-right: 20px
    justify-content: space-between
    align-items: center
    height: 65px
    border: 1px solid $border-color
  &__btn
    display: inline-block
    position: relative
    z-index: 1
    width: 24px
    border: none
    background: transparent
    user-select: none
    cursor: pointer
    outline: none

    > span
      display: inline-block
      position: relative
      width: 100%
      height: $toggler-part-height
      vertical-align: middle
      font-size: 0
      color: transparent
      background: $toggler-part-bg-color
      transition: background $transition-time $transition-time

      &:before,
      &:after
        content: ""
        position: absolute
        left: 0
        width: 100%
        height: $toggler-part-height
        background: $toggler-part-bg-color
        transform-origin: 50% 50%
        transition: top $transition-time $transition-time, transform $transition-time

      &:before
        top: -7px

      &:after
        top: 7px

    &--close
      width: 18px
      > span
        transition: background $transition-time 0s
        background: transparent

        &:before,
        &:after
          top: 0
          transition: top $transition-time, transform $transition-time $transition-time

        &:before
          transform: rotate3d(0, 0, 1, 45deg)

        &:after
          transform: rotate3d(0, 0, 1, -45deg)

  &__list
    list-style: none
    padding: 0
    margin: 0

    &--hide
      .menu-item
        height: 0
        font-size: 0
        border: none
        transition: height $transition-time
+md-block
  .menu
    &__header
      display: flex

    &__btn
      display: none

    &__list
      display: flex
</style>
