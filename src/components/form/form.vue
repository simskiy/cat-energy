<template lang="pug">
  section.form
    h1.form__title Подбор программы
    form.form__form(action="", method="get")
      cat-info.form__cat-info
      form-contacts.form__contacts

      div.form__comment
        h2.form__subtitle Комментарий
        textarea(name="comment")
      div.form__options
        h2.form__subtitle Дополнительно
        input#sugar(type="checkbox", name="sugar", checked)
        label(for="sugar") Сахарозаменитель
        input#water(type="checkbox", name="water")
        label(for="water") Питьевая вода
        input#milk(type="checkbox", name="milk")
        label(for="milk") Молоко
        input#vitamin(type="checkbox", name="vitamin")
        label(for="vitamin") Витамины
      app-btn.form-btn(type="submit") Отправить заявку
      span * &ndash; Обязательные поля
</template>

<script>
import catInfo from './appInfo.vue'
import formContacts from './formContacts.vue'
import { eventEmitter } from '../../main.js'
export default {
  data () {
    return {
    }
  },
  components: {
    catInfo,
    formContacts
  },
  mounted () {
    eventEmitter.$emit('changeTextColorNav', '#000')
  }
}
</script>

<style lang="sass" scoped>
.form
  &__form
    margin-top: 35px
  &__title
    margin: 0
    margin-top: 30px
    margin-left: 20px
    margin-right: 20px
    font-size: 36px
    font-weight: 400
    color: $color-black
  &__text
    display: inline-block
    margin-top: 35px
    margin-left: 20px
    margin-left: 20px
    font-size: 14px
    font-weight: 400
    line-height: 18px
    text-transform: uppercase
    color: $color-black
  &__cat-info
</style>
