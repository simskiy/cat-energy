<template lang="pug">
ul.passport(role="none")
    li.passport__block(v-for="value in values")
      app-label.passport__label(:name="value.name") {{value.labelText}}
      app-input.passport__input(
        :id="value.name"
        :type="value.type"
        :name="value.name"
        :required="value.required"
        :placeholder="value.placeholder"
      )
</template>

<script>
import appLabel from './appLabel'
import appInput from './appInput'
export default {
  data () {
    return {
      values: [
        {
          type: 'text',
          name: 'name',
          required: true,
          placeholder: 'Барсик',
          labelText: 'Имя:*'
        },
        {
          type: 'text',
          name: 'weight',
          required: true,
          placeholder: 7,
          labelText: 'Вес (кг):*'
        },
        {
          type: 'number',
          name: 'age',
          required: false,
          placeholder: '7',
          labelText: 'Возраст (лет):'
        }
      ]
    }
  },
  components: {
    appLabel,
    appInput
  }
}
</script>

<style lang="sass" scoped>
.passport
  list-style: none
  padding: 0
  margin: 0
  &__block
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

$border-color: #cdcdcd
$text-color: #444
.input-text
  box-sizing: border-box
  height: 45px
  border: 1px solid $border-color
  font-size: 16px
  font-weight: 400
  outline: none
  text-transform: uppercase
  color: $text-color
  padding-left: 15px
  padding-right: 15px
</style>
