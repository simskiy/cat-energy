<template lang="pug">
  header.header
    .header__banner
      h1.header__title Функциональное питания для котов
      span.header__slogan Занялся собой? Займись котом!
      router-link(to="/form", class="header__link")
        app-btn.header__btn Подобрать программу
</template>

<script>
import appBtn from '../btn.vue'
export default {
  components: {
    appBtn
  }
}
</script>

<style lang="sass" scoped>
.header
  max-width: 320px
  height: 480px
  margin: auto
  text-align: center
  color: $color-white
  background: url('./img/index_can_mobile.png') center 167px no-repeat, url('./img/index_background_mobile.jpg') center top no-repeat
  &__banner
    position: relative
    padding-top: 25px
    box-sizing: border-box
  &__title, &__slogan
    font-weight: 400
  &__title
    font-size: 36px
    margin-top: 0
    margin-bottom: 15px
  &__slogan
    font-size: 14px
    text-transform: uppercase
  &__can-img
    position: absolute
    top: 167px
    left: 20px
  &__link
    display: inline-block
    cursor: pointer
    margin-top: 300px
    text-align: center
  &__btn
    width: 280px
    height: 40px
    font-size: 14px
    color: $color-white
    &:hover
      background-color: $btn-hover
    &:active
      color: rgba($color-white, 0.3)

+md-block
  .header
    margin-top: 60px
    max-width: 768px
    height: 868px
    text-align: left
    background: url('./img/index_can_tablet.png') no-repeat bottom
    background-size: 709px 609px
    background-position: center bottom
    &__banner
      padding-left: 90px
      padding-right: 205px
      color: $color-black
      // background: none
      padding-top: 0
    &__title
      font-size: 60px
      margin-bottom: 30px
    &__slogan
      font-size: 20px
    &__can-img
      display: none
    &__link
      margin-top: 45px
    &__btn
      width: 245px
      height: 52px
      font-size: 20px

+lg-block
  .header
    box-sizing: border-box
    padding-top: 142px
    max-width: 1440px
    height: 696px
    margin: auto
    background: url('./img/index_can.png') 560px 180px no-repeat, url('./img/index_background_desktop.jpg') right top no-repeat
    &__banner
      padding-left: 190px
    &__title
      margin-top: 80px
      width: 450px
    &__slogan
      display: block
      margin-top: 30px
    &__link
      margin-top: 50px

</style>
