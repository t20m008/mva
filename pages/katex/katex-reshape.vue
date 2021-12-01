<template>
  <v-row style="border: 1px solid black">
    <v-col cols="8">
      <nuxt-link to="/katex/katex">katex</nuxt-link>
      <nuxt-link to="/katex/katex-raw">raw</nuxt-link>
      <nuxt-link to="/katex/katex-collapse">collapse</nuxt-link>
      <nuxt-link to="/katex/katex-reshape">reshape</nuxt-link>
    </v-col>
    <v-col v-katex cols="12">
      {{ $window }}
      <!-- <div v-katex style="overflow-x: auto; overflow-y: hidden"> -->
      <div v-katex>
        $$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k+1} \right) = \left( \frac{1}{1}
        - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \cdots +
        \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1} $$
      </div>

      <div v-katex>
        $$\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+g) \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x =
        3x+x^2+3x^4$$
      </div>

      <div v-katex>
        $$ A = \left( \begin{array}{cccc} a_{ 11 } & a_{ 12 } & \ldots & a_{ 1n } \\ a_{ 21 } & a_{ 22 } & \ldots & a_{ 2n } \\
        \vdots & \vdots & \ddots & \vdots \\ a_{ m1 } & a_{ m2 } & \ldots & a_{ mn } \end{array} \right) = \left(
        \begin{array}{cccccccccc} 1&0&0&0&0&0&0&0&0&0 \\ 0&1&0&0&0&0&0&0&0&0 \\ 0&0&1&0&0&0&0&0&0&0 \\ 0&0&0&1&0&0&0&0&0&0 \\
        0&0&0&0&1&0&0&0&0&0 \\ 0&0&0&0&0&1&0&0&0&0 \\ 0&0&0&0&0&0&1&0&0&0 \\ 0&0&0&0&0&0&0&1&0&0 \\ 0&0&0&0&0&0&0&0&1&0 \\
        0&0&0&0&0&0&0&0&0&1 \\ \end{array} \right) $$
      </div>

      <div v-katex>
        $$\sum_{ k = 1 }^{ n } k^2 = \overbrace{ 1^2 + 2^2 + \cdots + n^2 }^{ n } = \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 )$$
      </div>

      <div v-katex>
        $$ \int_0^\pi \sin{mx}\cos{nx} dx = \frac{1-(-1)^{m-n}}{m^2 - n^2} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2 -
        n^2} & ( m-n \in odd ) \end{cases} $$
      </div>

      <div v-katex>
        $$ \int \frac{1}{x(x+2)}dx = \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx = \frac{1}{2}\int \frac{1}{x}dx -
        \frac{1}{2}\int \frac{1}{x+2}dx = \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C = \frac{1}{2}\log
        \left|\frac{x}{x+2}\right|+C $$
      </div>

      <div v-katex>$$ \sum_{n=1}^{\infty} ar^{n-1} = a + ar + ar^2 + ar^3 + \cdots + ar^{n-1} + \cdots = \frac{a}{1-r} $$</div>

      <div v-katex>
        $$ \left\{ \frac{f(x)}{g(x)} \right\}' = \left\{ f(x) \cdot \frac{1}{g(x)} \right\}' = f'(x) \left( \frac{1}{g(x)} \right)
        + f(x) \cdot \left( \frac{1}{g(x)} \right)' = \frac{f'(x)}{g(x)} + f(x) \cdot \frac{-g'(x)}{\left\{ g(x) \right\}^2} =
        \frac{f'(x)g(x)-f(x)g'(x)}{\left\{ g(x) \right\}^2} $$
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
    console.log('katex-reshape.vue mounted')
    /* eslint-disable camelcase */
    this.$katexLocalStorage()
    // eslint-disable-next-line no-unused-vars
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsible(false, true, katex_status)
    this.b()
  },
  methods: {
    b() {
      const katexs = document.getElementsByClassName('katex')
      Array.from(katexs).forEach((katex) => {
        katex.style.border = '1px solid pink'
      })
      const bases = document.getElementsByClassName('base')
      Array.from(bases).forEach((base) => {
        base.style.border = '1px dashed green'
      })
      const phraseEnds = document.getElementsByClassName('phrase_end')
      Array.from(phraseEnds).forEach((phraseEnd) => {
        phraseEnd.style.border = '1px dashed red'
      })
    },
  },
}
</script>

<style scoped>
.katex-html {
  margin: 100px 20px;
}
</style>
