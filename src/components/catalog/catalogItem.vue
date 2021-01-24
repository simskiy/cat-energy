<template lang="pug">
  li.item
    picture.item__picture
      source(:media="desktop", :srcset="getImageDesktop")
      source(:media="tablet", :srcset="getImageTablet")
      source(:media="mobile", :srcset="getImageMobile")
      img.item__img(:src="getImageMobile")
    div.item__description
      h3.item__title {{title}} {{type}} {{size}} г
      ul.item__list
        li.item__text
          span Объем:
          span {{size}}
        li.item__text
          span Вкус:
          span {{taste}}
        li.item__text
          span Цена:
          span {{price}} Р.
    button.item__btn Заказать
</template>

<script>
export default {
  name: 'catalogItem',
  props: ['title', 'type', 'size', 'taste', 'price', 'image'],
  data () {
    return {
      desktop: '(min-width: 1220px)',
      tablet: '(min-width: 768px)',
      mobile: '(min-width: 320px)'
    }
  },
  computed: {
    getImageDesktop () {
      return require(`./img/${this.image}-desktop.png`)
    },
    getImageTablet () {
      return require(`./img/${this.image}-tablet.png`)
    },
    getImageMobile () {
      return require(`./img/${this.image}-mobile.png`)
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  display: flex
  flex-wrap: wrap
  &__picture
    flex-basis: 50%
    height: 144px
  &__description
    flex-basis: 50%
  &__title
    font-size: 16px
    line-height: 20px
    font-weight: 400
    color: $color-black
    text-transform: uppercase
    margin-right: 65px
    margin-top: 25px
  &__list
    list-style: none
    margin: 0
    margin-top: 15px
    padding: 0
  &__text
    display: flex
    justify-content: space-between
    font-size: 12px
    line-height: 16px
    font-weight: 400
    font-family: $font-monotype
    color: $text-gray
  &__btn
    cursor: pointer
    height: 40px
    background-color: $btn-color
    color: $color-white
    font-size: 16px
    text-transform: uppercase
    width: 100%
    outline: none
    border: none
    &:hover
      background-color: $btn-hover
    &:active
      color: rgba($color-white, 0.3)
</style>
