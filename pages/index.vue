<template>
  <v-row justify="center" class="index">
    <v-col cols="10">
      <v-parallax dark height="300" src="https://beiz.jp/images_P/green/green_00010.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="10">
            <h1 class="text-h4 font-weight-thin mb-4">多変量解析</h1>
            <h4 class="subheading">3.2.2 代表的な連続型確率変数</h4>
          </v-col>
        </v-row>
      </v-parallax>
      連続型確率変数のうち、確率論・統計学で扱うことの多い代表的なものをいくつか紹介しておこう。
    </v-col>

    <v-col v-katex cols="10" class="part col-md-5">
      <v-card color="grey lighten-3">
        <v-card-title color="primary" class="py-0 px-0">
          <v-chip label class="mr-2" color="primary">定義3.4</v-chip>
          一様分布
        </v-card-title>
        <v-card-text
          >$a &lt; b$ を満たす実数 $a,b \in R$ に対し、確率変数 $X$ の密度関数が $$ f(x) = \left\{ \begin{array}{ll} (b-a)^{-1}, &
          (a &lt; x &lt; b)\\ 0 & (\text{その他}) \end{array} \right. $$
          で与えられるとき、$X$は区間$(a,b)$上の一様分布に従うといい、$X \sim U(a,b)$で表す。
        </v-card-text>
      </v-card>

      <v-alert text dense class="my-5" max-width="150" color="warning" icon="mdi-alert" border="left" elevation="2"
        >注意3.4
      </v-alert>

      <span>
        ⑴ この関数は非負であり、加えて
        <p>$$\begin{aligned} \int_{-\infty}^{\infty}f(x)dx &= \int_a^b (b-a)^{-1}dx \\ &= 1 \end{aligned}$$</p>
        だから、注意3.1の条件⑴,⑵を満たす。よって、一様分布に従う確率変数の存在は保証されている。
      </span>
      <p>
        ⑵
        いちいち場合わけを使って密度関数を書くのも面倒なので、(3.1)で導入した指示関数を用いて書くことが多い。この指示関数を使えば、
        $U(a,b)$ の密度関数は $$f(x)=(b-a)^{-1}1_{(a,b)}(x)$$ と表される。
      </p>
      <span>
        <!-- <div v-katex style="overflow-x: auto; overflow-y: hidden">
          $$\int_s^t (b-a)^{-1}1_{(a,b)}(x)dx = (x+12345678901234567890000000000xyzwabcdefg) \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx =
          \int_s^t (b-a)^{-1}1_{[a,b]}(x)dx = 1+x = 3x+x^2+3x^4$$
        </div> -->
        ⑶どんな被積分関数であっても、1点の上での積分の値は$0$なので、任意の$s,t$に対し
        が成り立つ。つまり、区間$[a,b]$上の一様分布も同様に定義したとき、区間$(a,b)$上の一様分布と区間$[a,b]$上の一様分布の間に実質的差異はない。
      </span>

      <v-alert
        text
        dense
        class="my-5"
        max-width="150"
        color="primary"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        >例3.1
      </v-alert>
      <span>
        $a,b$は$a &lt;
        b$を満たす定数とする。$X$が区間$(a,b)$上の一様分布に従うとき、$X$の期待値及び分散を計算してみよう。まず期待値であるが、期待値の定義（定義2.7）から
        <p>
          $$\begin{aligned} E[X] &=\int_{- \infty}^{\infty} xf(x)dx \\ &=\int_b^a (b-a)^{-1}xdx \\ &=(b-a)^{-1} \left[\frac{1}{2}
          x^2\right]_a^b \\ &=\frac{a+b}{2} \end{aligned}$$
        </p>
        であることがわかる。また分散であるが、定義2.8と定理3.2により
        <p class="mt-10">
          $$\begin{aligned} V[X] &= E\left[(X-E[X])^2\right] \\ &= E\left[ \left( X - \frac{a+b}{2} \right)^2 \right] \\ &=
          \int_{-\infty}^{\infty} \left( x - \frac{a+b}{2} \right)^2 f(x)dx \\ &= \int_a^b (b-a)^{-1} \left( x - \frac{a+b}{2}
          \right)^2 dx \\ &= (b-a)^{-1} \left[ \frac{1}{3} \left( x - \frac{a+b}{2} \right)^3 \right] \\ &= \frac{(b-a)^3}{12}
          \end{aligned}$$
        </p>
      </span>
    </v-col>
    <v-col v-katex cols="10" class="part col-md-5">
      <v-card color="grey lighten-3">
        <v-card-title color="primary" class="py-0 px-0">
          <v-chip label class="mr-2" color="primary">定義3.5</v-chip>
          正規分布
        </v-card-title>
        <v-card-text v-katex
          >$m \in R, v &gt; 0$に対し、確率変数$X$の密度関数が $$ f(x)= \frac{1}{\sqrt{2 \pi v}} \exp{\left(-
          \frac{1}{2v}(x-m)^2\right)}, x \in R$$ で与えられるとき、$X$はパラメータ$(m,v)$の正規分布に従うといい、$X \sim
          N(m,v)$で表す。
        </v-card-text>
      </v-card>
      <v-alert text dense class="my-5" max-width="150" color="warning" icon="mdi-alert" border="left" elevation="2"
        >注意3.5
      </v-alert>
      <p>
        (3.6)の関数$f$は非負である。また、参考文献[3] p.171にあるように $$\int_{-\infty}^{\infty} \mathrm{e}^{-\frac{x^2}{2}}dx =
        \sqrt{2\pi}$$
        となる。（この広義積分のことをガウス積分という）から、(3.6)の関数$f$は注意3.1の条件を共に満たしていることがわかる。よって、正規分布に従う確率変数の存在は保証されている。
      </p>
      <v-alert
        text
        dense
        class="my-5"
        max-width="150"
        color="primary"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        >例3.2
      </v-alert>
      <span>
        $m \in R, v &gt;
        0$とする。$X$がパラメータ$(m,v)$の正規分布に従うとき、$X$の期待値及び分散を計算してみよう。まず期待値であるが、期待値の定義（定義3.3）から
        <div>
          $$\begin{aligned} E[X] &= \int_{-\infty}^{\infty} x \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)} dx
          \\ &= \int_{-\infty}^{\infty} (x-m+m) \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)} dx \\ &=
          \int_{-\infty}^{\infty} (x-m) \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)} +
          \int_{-\infty}^{\infty} m \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)} dx \\ &= m +
          \int_{-\infty}^{\infty} (x-m) \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)}dx \end{aligned}$$
        </div>
        であることがわかる。ここで(3.7)により $$ \int_{-\infty}^{\infty} \frac{1}{\sqrt{2 \pi v}} \exp{\left(-
        \frac{1}{2v}(x-m)^2\right)} = 1$$ であることを用いた。さらに、奇関数の対象領域における積分が$0$であることを用いると
        <div>
          $$\begin{aligned} \int_{-\infty}^{\infty} (x-m) \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{1}{2v}(x-m)^2\right)}dx &=
          \int_{-\infty}^{\infty} t \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{t^2}{2v}\right)}dt \quad
          (t=x-m\text{と変数変換})\\ &= 0 \end{aligned}$$
        </div>
        であるから、$$ E[X] = m $$であることがわかった。また、分散については定義に従うと
        <div>
          $$\begin{aligned} V[X]&=E[(X-E[X])^2] \\ &= E[(X-m)^2] \\ &=\int_{-\infty}^{\infty} (x-m)^2 \frac{1}{\sqrt{2 \pi v}}
          \exp{\left(- \frac{1}{2v}(x-m)^2\right)}dx \\ &=\int_{-\infty}^{\infty} t^2 \frac{1}{\sqrt{2 \pi v}} \exp{\left(-
          \frac{t^2}{2v}\right)}dt \quad \color{#0000FF}{\text{($t=x-m$と変数変換)}} \\ &=v \int_{-\infty}^{\infty} s^2
          \frac{1}{\sqrt{2 \pi v}} \exp{\left(- \frac{s^2}{2}\right)}ds \quad
          \color{#0000FF}{\text{($s=\frac{t}{\sqrt{v}}$と変数変換)}}\end{aligned}$$
        </div>

        <br />
        であることがわかる。ここで $$ \frac{d}{ds}\exp(-\frac{1}{2}s^2)=-s\exp(-\frac{1}{2}s^2)$$
        に注意して、最後の積分に対し部分積分を施せば
        <p>
          $$ \begin{aligned} V[X] &= - \frac{v}{\sqrt{2 \pi}} \int_{-\infty}^{\infty} s \left( \frac{d}{ds} \exp{\left(-
          \frac{1}{2} s^2\right)} \right)dt \\ &= - \frac{v}{\sqrt{2 \pi}} \left( \left[ \exp{\left(- \frac{1}{2} s^2\right)}
          \right]_{-\infty}^{\infty} - \int_{-\infty}^{\infty} \exp{\left( - \frac{1}{2}s^2 \right)} dt \right) \\ &=
          \frac{v}{\sqrt{2 \pi}} \int_{-\infty}^{\infty} \exp{\left(- \frac{1}{2} s^2\right)}dt =v \end{aligned} $$
        </p>
        を得る。
        <br />
        ここまで確かめたように、$X$がパラメータ$(m,v)$の正規分布に従う時$E[X]=m,V[X]=v$であるから、パラメータ$(m,v)$の正規分布のことを「期待値（平均）$m$、分散$v$の正規分布」と呼ぶこともある。（期待値のことを「平均」と呼ぶことがある。）
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      title: '',
      message:
        'Nuxt.js(ナクスト・ジェイエス)は、Vue.js、Node.js、Webpack、Babel.jsに基づく自由かつオープンソースWebアプリケーションフレームワークで、Next.js[4]に触発されて開発された。このフレームワークは、「ユニバーサルアプリケーションのメタフレームワーク」を謳っている。ここでのユニバーサルとは、ブラウザでもサーバでも同一のVue.jsシングルファイルコンポーネントを利用してWeb画面を作成することができることを意味する。',
    }
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
  },
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
    // const displayArea1 = document.getElementById('display-area1')
    // const touchArea1 = document.getElementById('touch-area1')

    // // touchstartイベント
    // touchArea1.addEventListener('touchstart', () => {
    //   displayArea1.innerHTML = getTimeStamp() + ' touchstart'
    // })

    // // touchendイベント
    // touchArea1.addEventListener('touchend', () => {
    //   displayArea1.innerHTML = getTimeStamp() + ' touchend'
    // })

    // // touchmoveイベント
    // touchArea1.addEventListener('touchmove', (event) => {
    //   event.preventDefault() // 画面スクロールを防止
    //   displayArea1.innerHTML = getTimeStamp() + ' touchmove'
    // })

    // // touchcancelイベント
    // touchArea1.addEventListener('touchcancel', () => {
    //   displayArea1.innerHTML = getTimeStamp() + ' touchcacel'
    // })

    // タイムスタンプ取得
    // function getTimeStamp() {
    //   const date = new Date()
    //   return (
    //     ('0' + date.getHours()).slice(-2) +
    //     ':' +
    //     ('0' + date.getMinutes()).slice(-2) +
    //     ':' +
    //     ('0' + date.getSeconds()).slice(-2) +
    //     ':' +
    //     ('0' + date.getMilliseconds()).slice(-3)
    //   )
    // }
  },
}
</script>

<style>
@import '../node_modules/katex/dist/katex.min.css';

.index {
  font-family: 'RocknRoll One', sans-serif;
}

.index-center {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

#touch-area1 {
  /* width: 200px;
  height: 200px;
  background-color: bisque; */
}
</style>
