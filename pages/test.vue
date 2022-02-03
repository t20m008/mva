<template>
  <v-row justify="center">
    <v-col cols="10">
      <div v-katex>
        <p>$$\sum x$$</p>
        <p>$\sum x$</p>
        <p>$$|x|$$</p>
        <p>$${}_n C_k$$</p>
        <p>$$x!$$</p>
        <p>$$2x^2$$</p>
        <p>$$x \textbf{df} \textrm{df}$$</p>
        <p>$$\sqrt{x}$$</p>
        <svg width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice">
          <path
            d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"
          ></path>
        </svg>

        <p>$$\sqrt[3]{x}$$</p>

        <p>$$ \int x^\alpha dx = \frac{1}{\alpha + 1} x^{\alpha + 1} + C$$</p>
        <p>
          $$ \begin{aligned} x_1 &= a_1 &+ b_1 &+ c_1 &+ d_1 \\ x_2 &= a_2 \\ x_3 &= &+ b_3 \\ x_4 &= a_4 & & &+ d_4 \end{aligned}
          $$
        </p>
        <p style="background: #ccc"></p>
        <p>
          $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
          \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C \\
          &= \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
        </p>

        <p style="background: #ccc"></p>
        <p>
          $$ \begin{aligned} 2x+6y+4(x+3y) &= 2(x+2y) \\ 2x+6y+4x+12y &= 2(x+2y) \\ 6x+18y &= 2(x+2y) \\ 6x+18y-18y &= 2x+4y-18y
          \\ 6x &= 2x-14y \\ 6x-2x &= 2x-2x-14y \\ 4x &= -14y \\ x &= \frac{-14y}{4} \end{aligned} $$
        </p>

        <!-- <p style="background: #ccc">垂直連結対象型 : 複数列揃え</p> -->
        <p style="background: #ccc"></p>
        <p>
          $$ \begin{aligned} x_t &= \phi_1 x_{t-1} &+ \phi_2 x_{t-2} &+ \phi_3 x_{t-3} &+ \epsilon_t \\ x_{t-1} &= 1 \cdot x_{t-1}
          \\ x_{t-2} &= &+1\cdot x_{t-2}\\ Y_t &= x_t & & &+ 0 \cdot \epsilon'_t \end{aligned} $$
        </p>

        <!-- <p>
      \[ \begin{aligned} P(X_t=1)&=M_{11}P(X_{t-1}=1)+M_{12}P(X_{t-1}=2)+\cdots+M_{1n}P(X_{t-1}=n)\\
      P(X_t=2)&=M_{21}P(X_{t-1}=1)+M_{22}P(X_{t-1}=2)+\cdots+M_{2n}P(X_{t-1}=n)\\ &\vdots\\
      P(X_t=n)&=M_{n1}P(X_{t-1}=1)+M_{n2}P(X_{t-1}=2)+\cdots+M_{nn}P(X_{t-1}=n) \end{aligned} \]
    </p> -->

        <div style="height: 300px; width: 800px">a</div>
        <p>$$x+a$$</p>
        <v-row class="center">
          <v-col cols="10" class="ma-0 pa-0">
            <v-card color="light-blue lighten-5" class="my-4 vcard">
              <v-sheet color="light-blue darken-3">
                <v-card-title color="" class="py-1 pl-3 white--text">平方数の和の公式</v-card-title>
              </v-sheet>
              <v-card-text>
                $1$ から $n$ までの平方数の和は、 $\begin{aligned} \sum_{ k = 1 }^{ n } k^2 &= \overbrace{ 1^2 + 2^2 + \cdots +
                n^2 }^{ n } \\ &= \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 ) \end{aligned}$ と表されます。
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: '多変量解析☆演習 L14 学習支援',
      e1: 1,
      done: false,
    }
  },
  mounted() {
    this.$katexLocalStorage()
    // eslint-disable-next-line camelcase
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsible(true, false, katex_status)
    this.$katexContextMenu()
    // this.border()
  },
  methods: {
    border() {
      Array.from(document.getElementsByClassName('base')).forEach((e, i) => {
        e.style.border = '1px solid green'
      })

      Array.from(document.getElementsByClassName('leftmost')).forEach((e, i) => {
        e.style.border = '1px solid red'
      })

      Array.from(document.getElementsByClassName('rightmost')).forEach((e, i) => {
        e.style.border = '1px solid blue'
      })
    },
  },
}
</script>

<style scoped>
.base {
  border: 1px solid green;
}
.leftmost {
  border: 1px solid red;
}
.rightmost {
  border: 1px solid blue;
}
</style>
