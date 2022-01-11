<template>
  <div>
    <!-- <p v-katex>
      $$ \begin{aligned} X_t &= \phi_1 X_{t-1}+\epsilon_t \\ &= \phi_1 (\phi_1 X_{t-2}+\epsilon_{t-1})+\epsilon_t \\ &= \phi_1
      (\phi_1(\phi_1 X_{t-3}+\epsilon_{t-2})+\epsilon_{t-1})+\epsilon_t \\ &= \cdots \\ &= \phi_1^t X_0 +
      \phi_1^{t-1}\epsilon_1+\phi_1^{t-2}\epsilon_2+\cdots + \phi_1^0\epsilon_t \\ &= \phi_1^t X_0 + \sum_{k=0}^{t-1} \phi_1^k
      \epsilon_{t-k} \\ &= \phi_1^t X_0 + \frac{1-\phi_1^t}{1-\phi_1} \end{aligned} $$
    </p> -->
    <p v-katex>
      $$ \begin{aligned} \mathrm{Cov}[X_t,X_{t-s}] &= \phi_1^{2t-s}\mathrm{E}[X_0X_0]
      +(\phi_1^{2t-2s-2}+\phi_1^{2t-2s-4}+\cdots+\phi_1^0)\phi_1^s)\sigma^2\\ &= \phi_1^{2t-s}\mathrm{E}[X_0X_0]
      +\frac{1-(\phi_1^2)^{t-s}}{1-\phi_1^2}\phi_1^s \sigma^2\\ &\rightarrow \begin{cases} \frac{\phi_1^s\sigma^2}{1-\phi_1^2} &
      (|\phi_1|\lt1)\\ \approx t& (|\phi_1|=1)\\ \approx t \phi_1^{2t} & (|\phi_1|\gt1) \end{cases}\\ \end{aligned} $$
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    /* eslint-disable camelcase */
    const NodeList = document.querySelectorAll('span .katex-mathml .katex')
    Array.from(NodeList).forEach((Node) => {
      Node.remove()
    })
    this.$katexLocalStorage()
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsible(true, false, katex_status)
    this.$katexContextMenu()

    Array.from(document.getElementsByClassName('katex')).forEach((k) => {})
    this.b()
  },
  methods: {
    b() {
      const katexs = document.getElementsByClassName('katex')
      Array.from(katexs).forEach((katex) => {
        // katex.style.border = '1px solid pink'
      })
      const bases = document.getElementsByClassName('base')
      Array.from(bases).forEach((base) => {
        base.style.border = '1px dashed green'
      })
      const phraseEnds = document.getElementsByClassName('left')
      Array.from(phraseEnds).forEach((phraseEnd) => {
        phraseEnd.style.border = '1px dashed red'
      })
    },
  },
}
</script>

<style scoped>
code {
  background-color: #2e2e2e !important;
  color: white !important;
}

.hljs.python::before {
  content: 'Python';
  background-color: #626832;
  padding: 5px;
}

.hljs.C::before {
  content: 'C';
  background-color: #32684d;
  padding: 5px;
}
</style>
