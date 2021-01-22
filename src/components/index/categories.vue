<template lang="pug">
section.categories
  h2.unvis Виды корма
  ul.categories__list
    li.categories__item.categories__item--cat-1
      h3.categories__title Похудение
      p.categories__text Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
      router-link(to='' class='categories__link') Каталог Slim
    li.categories__item.categories__item--cat-2
      h3.categories__title Набор массы
      p.categories__text Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
      router-link(to='' class='categories__link') Каталог Pro

</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.categories
  padding-left: 20px
  padding-right: 20px
  &__list
    margin: 0
    padding: 0
    list-style: none
  &__item
    padding: 20px
    padding-bottom: 0
    margin-top: 20px
    background-color: $bg-gray
    background-repeat: no-repeat
    &--cat-1
      background-image: url('./img/cat-1.svg'), url('./img/ellipse.svg')
      background-size: 35px 49px, 50px 50px
      background-position: top 20px left 30px, top 20px left 22px
    &--cat-2
      background-image: url('./img/cat-2.svg'), url('./img/ellipse.svg')
      background-size: 67px 28px, 50px 50px
      background-position: top 35px left 13px, top 20px left 22px
  &__title
    font-size: 24px
    font-weight: 400
    text-transform: uppercase
    margin: 0
    padding-left: 72px
    height: 50px
    line-height: 50px
    background-position: center left
    background-repeat: no-repeat
  &__text
    +font-text-mobile
    padding-top: 20px
    padding-bottom: 20px
    margin: 0
    border-bottom: 1px solid $border-color
  &__link
    display: inline-block
    position: relative
    font-size: 16px
    color: $color-black
    text-transform: uppercase
    text-decoration: none
    line-height: $height-link
    height: 57px
    &:active
      opacity: 0.3
    &:after
      content: ''
      display: block
      position: absolute
      top: $height-link/2 - $height-arrow/2
      left: $indent-arrow-mobile + $width-arrow
      height: $height-arrow
      width: $width-arrow
      background-color: $color-arrow
      transition: width $transition-time
    &:before
      content: ''
      display: block
      position: absolute
      top: $height-link/2 - $width-triangle/2
      left: $indent-arrow-mobile + $width-arrow*2
      border: $width-triangle/2 solid transparent
      border-left-color: $color-arrow
      transition: left $transition-time
    &:hover
      &:after
        width: $width-arrow + 10px
        right: $indent-arrow-mobile + $width-arrow + 10px
        transition: width $transition-time
      &:before
        left: $indent-arrow-mobile + $width-arrow*2 + 10px
        transition: left $transition-time

+md-block
  .categories
    padding-left: 30px
    padding-right: 30px
    max-width: 1440px
    &__item
      padding: 50px
      &--cat-1
        background-image: url('./img/cat-1.svg'), url('./img/ellipse.svg')
        background-size: 140px 194px, 200px 200px
        background-position: top 80px right 92px, right 60px center
      &--cat-2
        background-image: url('./img/cat-2.svg'), url('./img/ellipse.svg')
        background-size: 268px 112px, 200px 200px
        background-position: top 135px right 28px, right 60px center
      &:first-child
        margin-top: 0
    &__title
      padding: 0
      margin-top: 30px
      font-size: 36px
    &__text
      +font-text-tablet
      padding-top: 25px
      padding-bottom: 25px
      padding-right: 235px
      border: none
    &__link
      margin-top: 10px
      font-size: 20px
      &:before
        left: $indent-arrow-tablet + $width-arrow*2
      &:after
        left: $indent-arrow-tablet + $width-arrow
      &:hover
        &:before
          left: $indent-arrow-tablet + $width-arrow*2 + 10px
        &:after
          right: $indent-arrow-mobile + $width-arrow + 10px
+lg-block
  .categories
    box-sizing: border-box
    margin: auto
    padding-left: 110px
    padding-right: 110px
    &__list
      display: flex
      justify-content: space-between
      margin-top: 80px
    &__item
      margin: 0
      box-sizing: border-box
      flex-basis: 570px
      &:first-child
        margin-right: 20px
      &--cat-1
        background-image: url('./img/cat-1.svg'), url('./img/ellipse.svg')
        background-size: 70px 97px, 100px 100px
        background-position: top 41px left 66px, top 47px left 52px
      &--cat-2
        background-image: url('./img/cat-2.svg'), url('./img/ellipse.svg')
        background-size: 134px 56px, 100px 100px
        background-position: top 69px left 34px, top 47px left 52px

    &__title
      padding-left: 160px
    &__text
      padding: 0
      margin-top: 75px

</style>
