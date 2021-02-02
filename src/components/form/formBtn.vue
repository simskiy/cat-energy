<template lang="pug">
div.btn-wrapper
  app-btn.btn(type="submit") Отправить заявку
  span.note * &mdash; Обязательные поля
</template>

<script>
export default {

  name: 'formBtn',

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
$note-color: #444
.btn-wrapper
  display: flex
  flex-wrap: nowrap
  margin-top: 39px
  margin-left: 20px
  margin-right: 20px
.btn
  height: 40px
  flex-basis: 100%
.note
  flex-basis: 100%
  font-family: $font-monotype
  font-size: 14px
  line-height: 16px
  font-weight: 400
  color: $note-color
  text-align: center
  margin-top: 20px
  margin-bottom: 34px

+md-block
  .btn-wrapper
    margin-top: 50px
    margin-left: 70px
    margin-right: 70px
    align-items: center
  .btn
    flex-basis: 50%
    width: 283px
    height: 52px
  .note
    flex-basis: 50%
    width: 200px
    margin: 0

+lg-block
  .btn-wrapper
    margin-left: 110px
    margin-right: 110px
  .btn
    flex-basis: 568px
  .note
    text-align: left
    margin-left: 80px
</style>
