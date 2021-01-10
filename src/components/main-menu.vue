<template lang="pug">
  nav
    ul
      li
        router-link(to="/") Главная
      li
        router-link(to="/catalog") Каталог продукции
      li
        router-link(to="form")  Подбор программы

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
