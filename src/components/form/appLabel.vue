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
  .label
    font-size: 20px

.course__input + label
  position: relative
  &::before
    box-sizing: border-box
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
    box-sizing: border-box
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
+md-block
  .course__input + label::before
    width: $md-size
    height: $md-size
    left: 0
    top: -8px
  .course__input[data-checked] + label::before
    width: $md-size
    height: $md-size
    left: 0
    top: -8px
    box-shadow: inset 0 0 0 10px $color-white

</style>
