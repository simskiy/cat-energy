import { eventEmitter } from '../main.js'
export default {
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.setColor)
      this.setColor()
    })
  },
  methods: {
    setColor (event) {
      if (window.innerWidth >= 1220) {
        eventEmitter.$emit('changeBgColorFooter', '#fff')
      } else {
        eventEmitter.$emit('changeBgColorFooter', '#f2f2f2')
      }
      eventEmitter.$emit('changeTextColorNav', '#000')
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setColor)
  }
}
