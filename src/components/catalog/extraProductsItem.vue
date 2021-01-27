<template lang="pug">
  li.item
    h3.item__title {{title}}
    p.item__text
      span.item__name {{name}}
      span.item__price {{price}} Р.
    button.item__btn Заказать
</template>

<script>
export default {
  props: ['title', 'name', 'price']
}
</script>

<style lang="sass" scoped>
$color-title: #222
$color-text: #444
$border-color: #cdcdcd
.item
  border-bottom: 1px solid $border-color
  margin-left: 20px
  margin-right: 20px
  padding-bottom: 15px
  &:first-child
    border-top: 1px solid $border-color
  &__title

    font-size: 16px
    color: $color-title
    text-transform: uppercase
    font-weight: 400
  &__text
    display: flex
    justify-content: space-between
    font-size: 14px
    font-family: $font-monotype
    color: $color-text
    font-weight: 400
  &__btn
    cursor: pointer
    height: 40px
    width: 100%
    font-size: 16px
    font-family: $font-monotype
    text-transform: uppercase
    border: none
    background-color: $btn-color
    color: $color-white
    outline: none
    &:hover
      background-color: $btn-hover
    &:active
      color: rgba($color-white, 0.3)

</style>
