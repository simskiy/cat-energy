<template lang="pug">
  label.label(:for="name")
    slot
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['name']
}
</script>

<style lang="sass" scoped>
$color: #222

$sm-size: 30px
$md-size: 40px
$border-color: #cdcdcd
.label
  font-size: 16px
  text-transform: uppercase
  color: $color
  font-weight: 400
+md-block
  font-size: 20px

.course__input + label
  position: relative
  &::before
    position: absolute
    left: 0px
    top: -5px
    display: block
    content: ''
    width: $sm-size
    height: $sm-size
    border: 1px solid $border-color
    border-radius: 50%
    background-color: $color-white

.course__input[data-checked] + label
  &::before
    position: absolute
    left: 0px
    top: -5px
    display: block
    content: ''
    width: $sm-size
    height: $sm-size
    border: 1px solid $border-color
    border-radius: 50%
    background-color: $color-green
    box-shadow: inset 0 0 0 9px $color-white

</style>
