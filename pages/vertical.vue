<template>
  <v-row>
    <v-col cols="8">
      <nuxt-link to="/katex">katex</nuxt-link>
      <nuxt-link to="/katex-raw">raw</nuxt-link>
      <nuxt-link to="/katex-collapse">collapse</nuxt-link>
      <nuxt-link to="/katex-reshape">reshape</nuxt-link>
    </v-col>
    <v-col v-katex cols="12">
      <p id="sample">sample</p>

      <div v-katex:auto>
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ &=
        \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
      </div>

      <div v-katex:auto>
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx =& \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ =&
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ =& \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\ =&
        \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
      </div>

      <div v-katex:auto>
        $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &=& \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=&
        \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &=& \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\
        &=& \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
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
    /* eslint-disable camelcase */
    this.$execute()
    const katex_status = this.$getKatexStatus()
    this.$modifyKatex(false, false, katex_status)
    this.b()
  },
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword('foo@foo.foo', 'test22')
      } catch (e) {
        console.log(e)
      }
    },
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
      // const phraseEnds = document.getElementsByClassName('base')
      // Array.from(phraseEnds).forEach((phraseEnd) => {
      //   phraseEnd.style.border = '1px dashed red'
      // })
    },
  },
}
</script>

<style scoped>
.base {
  border: 1px solid black;
}
.wrap2 {
  border: 1px solid green;
}
</style>
