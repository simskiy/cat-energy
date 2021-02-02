<template lang="pug">
fieldset.info
  legend.info__title Заполните анкету и мы подберем программу питания для вашего кота
  .info__wrapper
    passport.info__passport
    course.info__course
</template>

<script>
import passport from './passport.vue'
import course from './course.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    passport,
    course
  }
}
</script>

<style lang="sass" scoped>
.info
  min-width: 320px
  border: none
  margin: 0
  padding: 0
  box-sizing: border-box
  width: 100%
  &__title
    margin-left: 20px
    margin-right: 20px
    font-size: 14px
    line-height: 18px
    font-weight: 400
    text-transform: uppercase
    color: $color-black
  &__wrapper
    margin-top: 39px
  &__course
    margin-top: 20px
+md-block
  .info
    &__title
      margin-left: 70px
      margin-right: 70px
      margin-top: 50px
      display: inline-block
      font-size: 20px
      line-height: 30px
      width: 330px
    &__wrapper
      margin-top: 70px
    &__course
      margin-top: 70px
+lg-block
  .info
    &__title
      margin: 0
      margin-left: 110px
      margin-right: 110px
    &__wrapper
      margin-left: 110px
      margin-right: 110px
      display: flex
      justify-content: space-between
    &__passport
    &__course
      margin: 0

</style>
