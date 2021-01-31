<template lang="pug">
fieldset.info
  legend.info__title Заполните анкету и мы подберем программу питания для вашего кота
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
  &__passport
    margin-left: 20px
    margin-right: 20px
    margin-top: 39px
  &__course
</style>
