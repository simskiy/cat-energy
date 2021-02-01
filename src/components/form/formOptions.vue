<template lang="pug">
fieldset.options
  legend.options__title Дополнительно
  ul.options__list(role="none")
    li.options__item(v-for="value of values")
      input.options__input(
        type="checkbox"
        :name="value.name"
        v-model:checked="value.checked"
        :id="value.name"
        :data-checked="value.checked === true")
      app-label.options__label(:name="value.name") {{value.labelText}}
</template>

<script>
import appLabel from './appLabel.vue'
export default {
  data () {
    return {
      values: [
        {
          name: 'sugar',
          checked: true,
          labelText: 'Сахарозаменитель'
        },
        {
          name: 'water',
          checked: false,
          labelText: 'Питьевая вода'
        },
        {
          name: 'milk',
          checked: false,
          labelText: 'Молоко'
        },
        {
          name: 'vitamins',
          checked: false,
          labelText: 'Витамины'
        }
      ]
    }
  },
  components: {
    appLabel
  }
}
</script>

<style lang="sass" scoped>
$border-color: #cdcdcd

.options
  $border-color: #cdcdcd
  position: relative
  border: none
  padding: 0
  margin: 0
  &__title
    font-size: 24px
    line-height: 24px
    font-weight: 400
    color: $color-black
    padding-left: 20px
    &:before
      position: absolute
      top: 15px
      left: 180px
      right: 0
      content: ''
      display: block
      height: 3px
      background-color: $color-green
  &__list
    padding: 0
    margin: 0
    margin-top: 30px
    list-style: none
  &__item
    position: relative
    display: flex
    height: 30px
    align-items: center
    margin-left: 20px
    margin-right: 20px
    margin-top: 12px
    &:first-of-type
      margin-top: 0
  &__input
    display: none
  &__label
    padding-left: 45px
    &:before
      box-sizing: border-box
      position: absolute
      left: 0
      top: 0
      content: ''
      display: block
      width: 30px
      height: 30px
      padding: 4px
      border: 1px solid $border-color
  &__input[data-checked] + label:before
    background: url('./img/check.svg') center center no-repeat
    background-size: contain
    background-position: center center
    background-origin: content-box
</style>
