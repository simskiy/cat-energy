<template lang="pug">
  div.comment
    label.comment__title(for="text") Комментарий
    textarea.comment__text#text(name="comment" placeholder="Расскажите обо всех повадках кота")
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="sass" scoped>
$placeholder-color: #444
$border-color: #cdcdcd
.comment
  position: relative
  width: 100%
  margin-top: 30px
  &__title
    font-size: 24px
    line-height: 24px
    font-weight: 400
    color: $color-black
    padding-left: 20px
    padding-right: 20px
    &:before
      position: absolute
      content: ''
      display: block
      height: 3px
      background-color: $color-green
      top: 14px
      left: 160px
      right: 0
  &__text
    outline: none
    margin-top: 30px
    margin-left: 20px
    margin-right: 20px
    padding: 15px
    box-sizing: border-box
    width: calc(100% - 40px)
    height: 150px
    border: 1px solid $border-color
    font-size: 16px
    line-height: 18px
    font-weight: 400
    text-transform: uppercase
    color: $placeholder-color
    &:placeholder
      // font-size: 16px
      // line-height: 18px
      // font-weight: 400
      // text-transform: uppercase
      // color: $placeholder-color

</style>
