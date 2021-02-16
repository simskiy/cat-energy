<template lang="pug">
  include ../../Pug/picture
  section.compare
    div.compare__inner
      h2.compare__title Живой пример
      p.compare__text Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
      div.compare__summary.summary
        div.summary__slimming
          span.summary__title 5кг
          span.summary__text снижение веса
        div.summary__time
          span.summary__title 60 дней
          span.summary__text затрачено времени
        div.summary__cost
          span Затраты на питание: 15 000 руб.
    div.compare__slider.slider
      div.slider__img
        div.slider__before(:class="{'slider__before--show': catBefore}" :style="{width: value + '%'}")
        div.slider__after(:class="{'slider__after--show': catAfter}")
      div.slider__control
        span.slider__before-text Было
        button.slider__btn(@click='changeImg' :class="[{'slider__btn--before': catBefore}, {'slider__btn--after': catAfter}]")
        input.slider__range(type="range", min="0" max="100" step="1" v-model:value='value')
        span.slider__after-text Стало
</template>

<script>
export default {
  data () {
    return {
      catBefore: true,
      catAfter: false,
      value: 100
    }
  },
  methods: {
    changeImg () {
      this.catBefore = !this.catBefore
      this.catAfter = !this.catAfter
    },
    setValue () {
      if (window.innerWidth < 768) {
        this.value = 100
      } else {
        this.value = 50
      }
    }
  },
  created () {
    window.addEventListener('resize', this.setValue)
  },
  destroyed () {
    window.removeEventListener('resize', this.setValue)
  }
}
</script>

<style lang="sass" scoped>

.compare
  max-width: 1440px
  padding-left: 20px
  padding-right: 20px
  background-color: $bg-gray
  margin-top: 40px
  &__title
    font-size: 36px
    font-weight: 400
    padding-top: 30px
    margin: 0
    color: $color-black
  &__text
    +font-text-mobile
    margin-top: 30px
  &__slider
    margin-top: 35px

.summary
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  margin-top: 25px

  &__title
    font-size: 24px
    text-transform: uppercase
    color: $color-black
  &__text
    display: inline-block
    position: absolute
    bottom: -15px
    box-sizing: border-box
    font-family: $font-monotype
    color: $text-gray
    font-size: 12px
    line-height: 12px
    text-align: center
    width: 87px
    padding-left: 15px
    padding-right: 15px
    background-color: $bg-gray
    font-family: $font-monotype

  &__slimming, &__time
    display: flex
    align-items: center
    justify-content: space-around
    position: relative
    width: 124px
    height: 56px
    border: 1px solid #cdcdcd
    border-radius: 3px

  &__cost
    flex-basis: 100%
    margin-top: 35px
    text-align: center
    color: $color-black
    width: 160px
    text-align: center
    text-transform: uppercase

.slider
  &__img
    height: 240px
    display: flex
    justify-content: space-around
  &__after, &__before
    display: none
    transition: background $transition-time
    width: 100%
    height: 240px
    background-position-x: center
    background-repeat: no-repeat
    &--show
      display: block
      transition: background $transition-time
  &__before
    background-image: url('./img/before-mobile.png')
  &__after
    background-image: url('./img/after-mobile.png')
  &__control
    display: flex
    justify-content: center
    align-items: center
    margin-top: 35px
    font-size: 16px
    font-weight: 400
    text-transform: uppercase
    padding-bottom: 39px
  &__before-text
    margin-right: 19px
  &__after-text
    margin-left: 19px
  &__btn
    cursor: pointer
    box-sizing: border-box
    width: 84px
    height: 14px
    padding: 3px
    border-radius: 6px
    border: 1px solid $btn-border
    outline: none
    background-color: $color-white
    background-repeat: no-repeat
    background-origin: content-box
    background-image: url('./img/toggle.png')
    &--before
      background-position: left
    &--after
      background-position: right
  &__range
    display: none

+md-block
  .compare
    padding-left: 30px
    padding-right: 30px
    padding-bottom: 75px
    margin-top: 55px
    border-top: 1px solid $border-line
    background: linear-gradient($color-white 60%, $bg-gray 60%)
    &__title
      padding-top: 50px
      font-size: 60px
    &__text
      +font-text-tablet
      margin-top: 60px
    &__summary
      margin-top: 55px
    &__slider
      margin-top: 85px

  .summary
    justify-content: space-between
    align-items: center
    &__title
      font-size: 30px
    &__text
      background-color: $color-white
      font-size: 14px
      padding-left: 8px
      padding-right: 8px
      width: auto
      white-space: nowrap
      bottom: -5px

    &__slimming, &__time
      width: 162px
      height: 72px
      flex-shrink: 0
    &__cost
      flex-basis: 180px
      font-size: 20px
      text-align: right
      margin: 0

  .slider
    &__img
      position: relative
      height: 465px
      width: 610px
      margin: auto
      overflow: hidden

    &__before, &__after
      position: absolute
      display: block
      height: 100%
      top: 0
      left: 0
      right: 0
      background-size: cover
      background-position: left 0 top 0
      // overflow: hidden
    &__before
      // left: 0
      z-index: 2
      background-color: rgba(255, 255, 255, 1)
      background-image: url('./img/before-tablet.png')
      // background-position-x: 0%
    &__after
      // right: 0
      left: auto
      z-index: 1
      background-image: url('./img/after-tablet.png')
      // background-position-x: 100%
    &__btn
      display: none
    &__range
      display: inline-block
      width: 428px
    &__control
      font-size: 20px
      margin: 0
    &__before-text
      margin-right: 25px
    &__after-text
      margint-left: 25px
    &__range
      display: inline-block
      +inputRange
+lg-block
  .compare
    box-sizing: border-box
    background: linear-gradient($color-white 30%, $bg-gray 30%)
    display: flex
    padding-left: 110px
    padding-right: 110px
    margin-top: 0
    margin: auto
    border: none
    &__title
      padding-top: 90px
    &__text
      margin-top: 140px
      padding-right: 175px
    &__inner
      flex-basis: 50%
    &__slider
      flex-basis: 50%
  .summary
    &__slimming
      margin-right: 40px
    &__time
      margin-right: auto
    &__cost
      flex-basis: 100%
      text-align: left
      margin-top: 60px
      font-size: 20px
  .slider
    // margin-top: 0
    &__before, &__after
      // background-size: contain
    &__before
      background-image: url('./img/before-desktop.png')

    &__after
      background-image: url('./img/after-desktop.png')

    &__img
      height: 500px
    &__control
      margin-top: 18px
</style>
