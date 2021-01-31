<template lang="pug">
fieldset.contacts
  legend.contacts__title Контактные данные (владельца кота)
  ul.contacts__list(role="none")
    li.contacts__item(v-for="value of values")
      app-label.contacts__label(:name="value.name") {{ value.labelText }}
      app-input.contacts__input(
        :id:="value.name"
        :type="value.type"
        :name="value.name"
        :required="value.required"
        :placeholder="value.placeholder"
      )
</template>

<script>
import appInput from './appInput.vue'
import appLabel from './appLabel.vue'

export default {
  data () {
    return {
      values: [
        {
          type: 'email',
          name: 'email',
          required: true,
          placeholder: 'kuklachev@gmail.com',
          labelText: 'e-mail:*'
        },
        {
          type: 'phone',
          name: 'phone',
          required: true,
          placeholder: '8 (960) 900-60-90',
          labelText: 'Телефон:*'
        }
      ]
    }
  },
  components: {
    appInput,
    appLabel
  }
}
</script>

<style lang="sass" scoped>
.contacts
  position: relative
  border: none
  padding: 0
  &__title
    display: inline-block
    width: 205px
    font-size: 24px
    line-height: 24px
    font-weight: 400
    color: $color-black
    padding-left: 20px
    margin-bottom: 30px
    &:before
      position: absolute
      content: ''
      display: block
      height: 3px
      top: 15px
      left: 220px
      right: 0
      background-color: $color-green
  &__list
    padding: 0
    margin: 0
    list-style: none
    padding-left: 20px
    padding-right: 20px
  &__item
    display: flex
    align-items: center
    margin-top: 15px
    &:first-of-type
      margin-top: 0
  &__label
    margin-right: 15px
    white-space: nowrap
  &__input
    width: 100%
</style>
