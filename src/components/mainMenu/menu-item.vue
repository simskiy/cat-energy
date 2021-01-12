<template lang="pug">
  li.item
    router-link(:to="href", class="item__link") {{title}}
</template>

<script>
export default {
  props: ['href', 'title']
}
</script>

<style lang="sass">
  .item
    font-family: 'Oswald', Arial, Helvetica, sans-serif
    font-size: 20px
    font-weight: 500
    text-transform: uppercase
    height: 65px

</style>
