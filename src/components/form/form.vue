<template lang="pug">
  section.form
    h1.form__title Подбор программы
    form.form__form(action="", method="get")
      cat-info.form__cat-info
      form-contacts.form__contacts
      form-comment.form__comment
      form-options.form__options
      app-btn.form__btn(type="submit") Отправить заявку
      span.form__note * &mdash; Обязательные поля
</template>

<script>
import catInfo from './appInfo.vue'
import formContacts from './formContacts.vue'
import formComment from './formComment.vue'
import formOptions from './formOptions.vue'
import { eventEmitter } from '../../main.js'
export default {
  data () {
    return {
    }
  },
  components: {
    catInfo,
    formContacts,
    formComment,
    formOptions
  },
  mounted () {
    eventEmitter.$emit('changeTextColorNav', '#000')

    if (window.innerWidth >= 1220) {
      eventEmitter.$emit('changeBgColorFooter', '#fff')
    } else {
      eventEmitter.$emit('changeBgColorFooter', '#f2f2f2')
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  $note-color: #444
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
  &__cat-info
  &__contacts
    margin-top: 39px
  &__comment
    margin-top: 39px
  &__options
    margin-top: 39px
  &__btn
    margin-top: 39px
  &__note
    display: inline-block
    width: 100%
    font-family: $font-monotype
    font-size: 14px
    line-height: 16px
    font-weight: 400
    color: $note-color
    text-align: center
    margin-top: 20px
    margin-bottom: 34px
</style>
