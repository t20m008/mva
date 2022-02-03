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
      ほにゃららほにゃららほにゃららほにゃらら$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} -
      \frac{1}{k+1} \right) = \left( \frac{1}{1} - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left(
      \frac{1}{3} - \frac{1}{4} \right) + \cdots + \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1}
      $ほにゃららほにゃららほにゃららほにゃらら、アイウエオkakikukeko$a=b$,,,,,,$c=d=e$,$f=ff=fff$aaa
      <div v-katex class="wrap1" style="overflow-x: auto; overflow-y: hidden">
        $$ S_n = \sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k+1} \right) = \left( \frac{1}{1}
        - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \cdots +
        \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1 - \frac{1}{n+1} $$
      </div>

      <div v-katex class="wrap1" style="overflow-x: auto; overflow-y: hidden">
        $$\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx =
        \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x = 3x+x^2+3x^4$$
      </div>

      $$ \int_0^\pi \sin{mx}\cos{nx} dx = \frac{1-(-1)^{m-n}}{m^2 - n^2} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2 -
      n^2} & ( m-n \in odd ) \end{cases} $$

      <div class="wrap2 mt-10">
        <div class="wrap1">
          $$ \int_0^\pi \sin{mx}\cos{nx} dx = \frac{1-(-1)^{m-n}}{m^2 - n^2} = \begin{cases} 0 & ( m-n \in even ) \\ \frac{2m}{m^2
          - n^2} & ( m-n \in odd ) \end{cases} $$
        </div>
      </div>
      <div v-katex:auto class="mt-15">
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
        \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
      </div>
      <v-btn @click="createUser()">createUser()</v-btn>
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
    console.log('katex-collapse.vue mounted')
    /* eslint-disable camelcase */
    this.$katexLocalStorage()
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsible(true, false, katex_status)
    this.$katexContextMenu()
  },
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword('foo@foo.foo', 'test22')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.wrap1 {
  border: 1px solid black;
}
.wrap2 {
  border: 1px solid green;
}
</style>
