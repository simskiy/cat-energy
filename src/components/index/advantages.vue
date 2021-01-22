<template lang="pug">
  section.advantages
    h2.advantages__header Как это работает
    ul.advantages__list
      li.advantages__item.advantages__item--bg-1
        .advantages__icon.advantages__icon--item-1
        p.advantages__text Функциональное питание содержит только полезные питательные вещества.
      li.advantages__item.advantages__item--bg-2
        .advantages__icon.advantages__icon--item-2
        p.advantages__text Выпускается в виде порошка, который нужно лишь залить кипятком и готово.
      li.advantages__item.advantages__item--bg-3
        .advantages__icon.advantages__icon--item-3
        p.advantages__text Замените один-два приема обычной еды на наше функциональное питание.
      li.advantages__item.advantages__item--bg-4
        .advantages__icon.advantages__icon--item-4
        p.advantages__text Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.advantages
  margin-top: 30px
  padding-left: 20px
  padding-right: 20px
  &__header
    font-size: 36px
    font-weight: 400
    color: $color-black
  &__list
    padding: 0
    list-style: none
  &__item
    display: flex
    align-items: center
    margin-top: 20px
  &__icon
    flex-basis: 60px
    height: 60px
    flex-shrink: 0
    background-color: $color-green
    background-repeat: no-repeat
    background-position: center center
    &--item-1
      background-image: url('./img/advantage_1.png')
    &--item-2
      background-image: url('./img/advantage_2.png')
    &--item-3
      background-image: url('./img/advantage_3.png')
    &--item-4
      background-image: url('./img/advantage_4.png')

  &__text
    margin: 0
    padding-left: 20px
    +font-text-mobile
+md-block
  .advantages
    padding-left: 30px
    padding-right: 30px
    &__header
      font-size: 60px
    &__list
      display: flex
      flex-wrap: wrap
      height: 600px
      justify-content: space-between
      align-content: space-between
    &__item
      display: flex
      flex-direction: column
      flex-basis: 285px
      height: 230px
      flex-shrink: 0
      align-items: flex-start
      background-repeat: no-repeat
      background-position: top center
      &--bg-1
        background-image: url('./img/1.png')
      &--bg-2
        background-image: url('./img/2.png')
      &--bg-3
        background-image: url('./img/3.png')
      &--bg-4
        background-image: url('./img/4.png')
    &__icon
      flex-basis: 80px
      width: 80px
    &__text
      +font-text-tablet
      padding: 0
      margin-top: 35px
      padding-right: 40px
+lg-block
  .advantages
    padding-left: 110px
    padding-right: 110px
    max-width: 1440px
    margin: auto
    box-sizing: border-box
    &__list
      height: auto
      margin: 0

</style>
