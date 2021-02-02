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
        :class="value.class"
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
          labelText: 'e-mail:*',
          class: 'contacts__input--email'
        },
        {
          type: 'phone',
          name: 'phone',
          required: true,
          placeholder: '8 (960) 900-60-90',
          labelText: 'Телефон:*',
          class: 'contacts__input--phone'
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
  margin: 0
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
    height: 45px
    &:first-of-type
      margin-top: 0
  &__label
    margin-right: 15px
    white-space: nowrap
  &__input
    width: 100%
    height: 100%
    padding-left: 15px
    padding-right: 45px
    background-repeat: no-repeat
    &--email
      background-image: url('./img/letter.svg')
      background-position: right 17px center
    &--phone
      background-image: url('./img/phone.svg')
      background-position: right 13px center
+md-block
  .contacts
    &__title
      line-height: inherit
      margin-left: 30px
      margin-bottom: 0
      padding-left: 40px
      font-size: 36px
      width: 595px
      text-align: left
      background-color: $color-white
      &:before
        top: 25px
        z-index: -10
        left: 0
    &__list
      padding-left: 70px
      padding-right: 70px
      margin-top: 70px
    &__item
      margin-top: 20px
      height: 52px
    &__label
    &__input
      font-size: 20px
+lg-block
  .contacts
    &__title
      margin-left: 70px
    &__list
      display: flex
      justify-content: space-between
    &__item
      margin: 0
      flex-basis: 45%
    &__list
      padding-right: 110px
      padding-left: 110px
</style>
