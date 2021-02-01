<template lang="pug">
ul.course(role="none")
    li.course__block(v-for="val in values")
      input.course__input(
        type="radio"
        :id="val.id"
        name="course"
        v-model="selectedValue"
        :value="val.id"
        :data-checked="selectedValue === val.id")
      appLabel.course__label(:name="val.id") {{ val.labelText }}
</template>

<script>
import appLabel from './appLabel.vue'
export default {
  data () {
    return {
      values: [
        { labelText: 'Похудение', id: 'slim' },
        { labelText: 'Набор массы', id: 'fat' },
        { labelText: 'Не знаю (нужен ваш совет)', id: 'advice' }
      ],
      selectedValue: 'slim'
    }
  },
  components: {
    appLabel
  },
  methods: {
    isChecked () {
      if (this.value === this.selectedValue) {
        return 'true'
      }
      return 'false'
    }
  }
}
</script>

<style lang="sass" scoped>
$border-color: #ededed
.course
  list-style: none
  margin: 0
  padding-left: 20px
  padding-right: 20px
  margin-top: 20px
  border-top: 1px solid $border-color
  border-bottom: 1px solid $border-color
  &__input
    display: none
  &__label
    padding-left: 45px
  &__block
    display: flex
    align-items: center
    height: 55px
</style>
