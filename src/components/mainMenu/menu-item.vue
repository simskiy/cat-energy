<template lang="pug">
  li.menu-item
    router-link(:to="href", class="menu-item__link", active-class="menu-item__link--active" exact) {{title}}
</template>

<script>
export default {
  props: ['href', 'title']
}
</script>

<style lang="sass">
  .menu-item
    display: flex
    justify-content: space-around
    align-items: center
    box-sizing: border-box
    font-family: 'Oswald'
    text-transform: uppercase
    height: 65px
    border-bottom: 1px solid $border-color
    transition: height $transition-time
    font-size: 20px
    font-weight: 500
    &:hover
      opacity: 0.6
    &:active
      opacity: 0.3
    &__link
      display: inline-block
      padding-top: 9px
      padding-bottom: 9px
      text-decoration: none
      color: $text-black
      &--active
        border-bottom: 2px solid $border-active-tablet

  +md-block
    .menu-item
      border: none
      margin-left: 35px
      &:first-child
        margin-left: 0

      &__link
        font-size: 18px
        font-weight: 400
  +lg-block
    .menu-item
      &__link
        font-size: 20px
        &--active
          border-bottom: 2px solid $border-active-desktop

</style>
