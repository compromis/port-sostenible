export default {
  data () {
    return {
      widthComparison: 0,
      scrolled: false
    }
  },

  computed: {
    comparisonProgress () {
      return this.widthComparison + '%'
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScrollWindow)
    this.$refs.scroller.locomotive.on('scroll', this.handleScroll)
    this.$refs.scroller.locomotive.update()
  },

  methods: {
    handleScroll ({ scroll }) {
      const vh = window.innerHeight * 0.01
      const progress = (scroll.y * 100) / (175 * vh)
      this.scrolled = scroll.y > 10
      this.widthComparison = progress > 100 ? 100 : progress
    },

    handleScrollWindow () {
      requestAnimationFrame(() => {
        const vh = window.innerHeight * 0.01
        const progress = (window.scrollY * 100) / (200 * vh)
        this.scrolled = window.scrollY > 10
        this.widthComparison = progress > 100 ? 100 : progress
      })
    }
  }
}
