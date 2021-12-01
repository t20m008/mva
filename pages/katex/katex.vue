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
      <div style="border: 1px solid green">
        $$\begin{aligned} V[X]&=E[(X-E[X])^2] \\ &= E[(X-m)^2] \\ &=\int_{-\infty}^{\infty} (x-m)^2 \frac{1}{\sqrt{2 \pi v}}
        \exp{\left(- \frac{1}{2v}(x-m)^2\right)}dx \\ &=\int_{-\infty}^{\infty} t^2 \frac{1}{\sqrt{2 \pi v}} \exp{\left(-
        \frac{t^2}{2v}\right)}dt \quad \color{#0000FF}{\text{($t=x-m$と変数変換)}} \\ &=v \int_{-\infty}^{\infty} s^2
        \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{s^2}{2}\right)}ds \quad
        \color{#0000FF}{\text{($s=\frac{t}{\sqrt{v}}$と変数変換)}}\end{aligned}$$
      </div>
      <div ref="sample" v-katex>
        $$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k+1} \right) = \left( \frac{1}{1}
        - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \cdots +
        \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1} $$
      </div>

      <div v-katex>
        $$\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx =
        \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x = 3x+x^2+3x^4$$
      </div>
      <div v-katex:auto>
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
        \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
      </div>

      <div>
        <enlargeable-image src="https://placehold.jp/150x150.png" src_large="https://placehold.jp/200x200.png" />
      </div>
      {{ $window }}
      {{ $refs.sample }}
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
    console.log('katex.vue mounted')
    // const NodeList = document.querySelectorAll('span .katex-mathml .katex')
    // console.log(NodeList)
    /* eslint-disable camelcase */
    this.$katexLocalStorage()
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsible(true, true, katex_status)
    this.$katexContextMenu()
  },
}
</script>

<style scoped>
.base {
  border: 1px dashed rgb(184, 63, 63);
}
.katex-html {
  border: 1px solid green;
}
</style>
