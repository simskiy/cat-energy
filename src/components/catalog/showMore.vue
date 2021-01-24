<template lang="pug">
  li.show-more
    h3.show-more__title Показать еще 100500 товаров
    p.show-more__text На самом деле вкусов гораздо больше!!
    button.show-more__btn Показать все
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
.show-more
  display: flex
  flex-direction: column
  align-items: center
  box-sizing: border-box
  padding-left: 20px
  padding-right: 20px
  padding-bottom: 25px
  height: 210px
  background: url('./img/cross.svg') no-repeat top 25px center
  border-bottom: 1px solid $color-line
  &__title
    margin: 0
    margin-top: auto
    font-size: 16px
    font-weight: 400
    text-transform: uppercase
    color: $color-black
  &__text
    margin: 0
    margin-top: 10px
    font-size: 12px
    font-family: $font-monotype
    color: $text-gray
  &__btn
    cursor: pointer
    margin-top: 20px
    height: 40px
    width: 100%
    outline: none
    border: none
    background-color: $bg-gray
    font-size: 16px
    text-transform: uppercase
    color: $btn-text
    &:hover
      background-color: #ebebeb
    &:active
      color: rgba($btn-text, 0.3)
</style>
