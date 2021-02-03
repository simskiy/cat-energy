<template lang="pug">
  main.form
    h1.form__title Подбор программы
    form.form__form(action="", method="get")
      cat-info.form__cat-info
      form-contacts.form__contacts
      form-comment.form__comment
      form-options.form__options
      form-btn.form__btn
</template>

<script>
import catInfo from './appInfo.vue'
import formContacts from './formContacts.vue'
import formComment from './formComment.vue'
import formOptions from './formOptions.vue'
import formBtn from './formBtn.vue'
import colorMixin from '../colorMixin.js'
export default {
  components: {
    catInfo,
    formContacts,
    formComment,
    formOptions,
    formBtn
  },
  mixins: [colorMixin]
}
</script>

<style lang="sass" scoped>
.form
  max-width: 1440px
  margin: auto
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
  &__contacts
    margin-top: 39px
  &__comment
    margin-top: 39px
  &__options
    margin-top: 39px

+md-block
  .form
    &__title
      font-size: 60px
      line-height: auto
      margin-top: 60px
      margin-left: 70px
      margin-right: 70px
    &__cat-info
      margin-top: 50px
    &__contacts
      margin-top: 80px
    &__comment
      margin-top: 70px
    &__options
      margin-top: 70px
    &__btn
      margin-bottom: 70px

+lg-block
  .form
    margin-top: 194px
    &__title
      margin-left: 110px
      margin-right: 110px
    &__contacts
      margin-top: 70px
    &__btn
      margin-bottom: 80px
</style>
