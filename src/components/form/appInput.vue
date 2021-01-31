<template lang="pug">
input.input-text(:type=`${type}`, :name=`${name}`)
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
$border-color: #cdcdcd
$text-color: #444
.input-text
  // width: 100%
  box-sizing: border-box
  height: 45px
  border: 1px solid $border-color
  font-size: 16px
  font-weight: 400
  outline: none
  text-transform: uppercase
  color: $text-color
  padding-left: 15px
  padding-right: 15px
</style>
