<template lang="pug">
  li.menu-item
    router-link(:to="href", class="menu-item__link") {{title}}
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
    font-family: 'Oswald', Arial, Helvetica, sans-serif
    font-size: 20px
    font-weight: 500
    text-transform: uppercase
    height: 65px
    border-bottom: 1px solid $border-color
    transition: height $transition-time

    &__link
      text-decoration: none
      color: $text-black

</style>
