<template lang="pug">
  li.item
    .gift__item
      span.gift__text Закажите все и получите чехол для кота в подарок!
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.gift
  &__item
    height: 290px
    width: 280px
    padding-top: 40px
    padding-bottom: 35px
    margin: auto
    background-position: center top 65px, center center
    background-repeat: no-repeat
    background-image: url('./img/gift.png'), url('./img/gift_photo_mobile.jpg')
  &__text
    display: inline-block
    margin-left: 60px
    margin-right: 60px
    margin-top: 190px
    text-align: center
    color: $color-white
    font-size: 16px
    line-height: 20px
    font-weight: 400
    font-family: $font-monotype
</style>
