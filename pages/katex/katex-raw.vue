<template>
  <v-row>
    <v-col cols="8">
      <nuxt-link to="/katex/katex">katex</nuxt-link>
      <nuxt-link to="/katex/katex-raw">raw</nuxt-link>
      <nuxt-link to="/katex/katex-collapse">collapse</nuxt-link>
      <nuxt-link to="/katex/katex-reshape">reshape</nuxt-link>
    </v-col>
    <v-col v-katex cols="12">
      <!-- <div v-katex style="overflow-x: auto; overflow-y: hidden"> -->
      <div v-katex>
        $$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k+1} \right) = \left( \frac{1}{1}
        - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \cdots +
        \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1} $$
      </div>

      <div v-katex style="overflow-x: auto; overflow-y: hidden">
        $$\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx =
        \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x = 3x+x^2+3x^4$$
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {}
  },

  watch: {
    '$window.width'() {
      // eslint-disable-next-line no-console
      console.log(`width: ${this.$window.width}`)
    },
    '$window.height'() {
      // eslint-disable-next-line no-console
      console.log(`height: ${this.$window.height}`)
    },
    '$window.pageYOffset'() {
      // eslint-disable-next-line no-console
      console.log(`pageYOfset: ${this.$window.pageYOffset}`)
    },
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('katex.vue : ', window.innerWidth)
    // this.$exec3(false, false)
    this.b()
  },
  methods: {
    b() {
      const bases = document.getElementsByClassName('base')
      Array.from(bases).forEach((base) => {
        base.style.border = '1px dashed green'
      })
    },
  },
}
</script>
