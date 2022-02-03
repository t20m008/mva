<template>
  <v-row justify="center" class="index">
    <v-col cols="12">
      <v-parallax dark height="200" src="https://beiz.jp/images_P/orange/orange_00014.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="10">
            <h1 class="text-h4 mb-4">多変量解析☆演習</h1>
            <h4 v-katex class="subheading">L15 時系列の状態空間モデル・時系列の機械学習</h4>
            <h4></h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
    <v-col v-katex cols="10">
      <v-alert outlined class="" color="" dense max-width="150">
        <div class="text-h6">今日の目標</div>
      </v-alert>
      <v-list dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-flag-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>時系列モデルの状態空間モデルを説明できる.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-flag-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>時系列予測ライブラリProphetが使える.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-alert text class="my-5" color="green darken-4" border="left" elevation="5"><b>状態空間モデル</b> </v-alert>
      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>時系列の隠れた変数</b>
      </v-alert>
      <p>
        琵琶湖の漁の毎年の漁獲量は時系列. 過去の漁獲量(kg)のデータを見て, $\mathrm{AR}(2)$っぽい, とか, $\phi_1,\phi_2,\sigma^2$
        はいくつ? とか推定することはできる. しか〜し.
      </p>
      <ul>
        <li>
          実は背後に, 琵琶湖の生息するナマズの総数とか, モロコの総数とか, もっと言えば, 水温とか水草の量とか,
          観測できないより本質的な時系列があるのでは?
          <ul>
            <li>被食者捕食者の増減の話とかやったよね?/やります.<span class="citing">微分方程式, 数理モデル</span></li>
          </ul>
        </li>
        <li>
          ホワイトノイズ$\epsilon_t$っていうけど, 今年はたまたま稚魚が育たなかったっていうノイズと,
          今年はコロナで漁船の整備ができなかった(?)っていうノイズは別なのでは?
        </li>
      </ul>

      <div class="alert">システムと観測を分けて, もっと精密に考えたい!</div>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>状態空間モデル</b>
      </v-alert>
      <v-row class="center">
        <v-col cols="10" class="ma-0 pa-0">
          <v-card color="light-blue lighten-5" class="my-4 vcard">
            <v-sheet color="light-blue darken-3">
              <v-card-title color="" class="py-1 pl-3 white--text">状態空間モデルの簡単な場合</v-card-title>
            </v-sheet>
            <v-card-text>
              <ul>
                <li>
                  観測できない量
                  <ul>
                    <li>$\mathbf{X}_t$: 状態ベクトル(2次元)</li>
                    <li>$\mathbf{v}_t$: システムノイズベクトル(2次元)</li>
                    <li>$w_t$: 観測ノイズ(1次元)</li>
                    <li>$\mathbf{v}_t$,$w_t$ は互いに独立なホワイトノイズ</li>
                  </ul>
                </li>
                <li>
                  観測できる量
                  <ul>
                    <li>$Y_t$: 観測値(1次元)</li>
                  </ul>
                </li>
                <li>
                  定数
                  <ul>
                    <li>$F,G$: $2\times2$行列</li>
                    <li>$H$: $1\times2$行列</li>
                  </ul>
                </li>
              </ul>
              <span>$$ \text{システムモデル } \mathbf{X}_t = F\mathbf{X}_{t-1} + G\mathbf{v}_t $$</span>
              <span> $$ \text{観測モデル } Y_t = H\mathbf{X}_{t} + w_t $$ </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <p>状態空間$=\mathbf{X}_t$ の観測できない空間</p>

      <p>
        状態ベクトルは, $ \mathbf{X}_t =F\mathbf{X}_{t-1}+G\mathbf{v}_t =F(F\mathbf{X}_{t-2}+G\mathbf{v}_{t-1})+G\mathbf{v}_{t-1}
        =\cdots=F^{t}\mathbf{X}_0 + \sum_{t'=0}^t F^{t-t'}G\mathbf{v}_{t'} $ のように漸化式で計算される.
      </p>

      <p>観測値 $Y_t$ は漸化式で結ばれておらず, 各時刻ごとに $ Y_t=H\mathbf{X}_t + w_t$ で$\mathbf{X}_t$ から計算される.</p>
      <v-alert dense text class="my-5" elevation="5" max-width="200"><b>例:琵琶湖の漁獲量</b></v-alert>
      <span>
        $$ \begin{aligned} F= \begin{pmatrix} 1.01 & 0.3\\ -0.5 & 0.98 \end{pmatrix}, \mathbf{X}_t= \begin{pmatrix}
        \text{なまずの個体数}\\ \text{モロコの個体数}\\ \end{pmatrix}, G= \begin{pmatrix} 1 & 2\\ 100 & 200 \end{pmatrix},
        \mathbf{v}_t= \begin{pmatrix} 正規分布(水草の量)\\ 正規分布(水温) \end{pmatrix} \end{aligned}$$
      </span>

      <span>
        $$ \begin{aligned} Y_t=\text{漁獲量(kg)}, H= \begin{pmatrix} 1000 & 10\\ \end{pmatrix}, \mathbf{X}_t= \begin{pmatrix}
        \text{なまずの個体数}\\ \text{モロコの個体数}\\ \end{pmatrix}, w_t=正規分布(漁船の数) \end{aligned}$$
      </span>
      <v-alert dense text class="my-5" elevation="5" max-width="200"><b>例:AR(2)</b></v-alert>
      $$ x_t=\phi_1 x_{t-1}+\phi_2 x_{t-2} + \epsilon_t. $$ は,

      <span>
        $$\begin{pmatrix} x_t\\ x_{t-1} \end{pmatrix} = \begin{pmatrix} \phi_1 & \phi_2 \\ 1 & 0 \end{pmatrix} \begin{pmatrix}
        x_{t-1}\\ x_{t-2} \end{pmatrix} + \begin{pmatrix} 1 & 0\\ 0 & 0 \end{pmatrix} \begin{pmatrix} \text{正規分布}\\
        \text{正規分布} \end{pmatrix}$$</span
      >
      と表せる
      <div class=""></div>

      <span>$$ y_t = \begin{pmatrix} 1 & 0\\ \end{pmatrix} \begin{pmatrix} x_{t}\\ x_{t-1} \end{pmatrix} + 0 $$ </span>
      <p>AR(3)は</p>
      $$ \begin{aligned} x_t &=\phi_1 x_{t-1} &+\phi_2 x_{t-2} &+\phi_3 x_{t-3}&+\epsilon_t,\\ x_{t-1}&=1\cdot x_{t-1},\\
      x_{t-2}&= &+1\cdot x_{t-2},\\ Y_t &=x_t & & &+0\cdot\epsilon'_t \end{aligned} $$
      <p>のように3次元の状態空間で表せる.</p>

      <v-alert dense text class="my-5" elevation="5" max-width="250"><b>例:ローカルレベルモデル</b></v-alert>
      $$ x_t = x_{t-1} + \text{乱数} $$ $$ y_t = x_t +\text{別の乱数} $$
      <p>
        ランダムウォークだが, 観測者によるウォーカーの位置の測定値 $y_t$は正確ではない. その前提で, 正確な位置 $x_t$ を求めたい.
      </p>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>状態空間モデルの特徴</b>
      </v-alert>

      <ul>
        <li>$\mathrm{AR}(m)$ や親戚の MA, ARMA, SARIMA などのモデルを統一的に表せる.</li>
        <li>これでないと表せないモデルもある.</li>
        <li>
          制御工学でよく扱われて, 解法が整備されている. <span class="keyword">フィルタ, 平滑化</span>. カルマンフィルタ
          <a href="https://pykalman.github.io/">pykalman</a>
        </li>
        <li>パラメタが多い</li>
        <li>HMM=Hidden Markov model <span class="keyword">隠れマルコフモデル</span> はこの離散バージョン</li>
      </ul>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>状態空間モデルを使う手続き</b>
      </v-alert>
      <ol>
        <li>与えられた $y_t$ を見る</li>
        <li>(原理から考えて)モデルを書く</li>
        <li>F,G,Hが未知ならそれを<span class="keyword">パラメタ推定</span>する</li>
        <li>
          与えられた学習データ $\{y_t\}_{t=0,\ldots,T}$ から $\mathbf{X}_t$ を<span class="keyword">状態推定</span
          >(予測,フィルタ,平滑化)する.
        </li>
        <li>テストデータ $y_t$ と, $\mathbf{X}_t$ から求めた $\hat{y}_t$ を比較して, 性能を評価する</li>
      </ol>
      <p>
        Python の関数
        <a href="http://www.statsmodels.org/dev/generated/statsmodels.tsa.statespace.structural.UnobservedComponents.html"
          >statsmodels.tsa.UnobservedComponents</a
        >
      </p>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>状態空間モデルの扱いやすい場合1</b>
      </v-alert>
      <ul>
        <li>
          $\mathbf{v}_t,\mathbf{w}_t$ が正規分布にしたがうと仮定する. このとき, 正規分布の加法性から, $\mathbf{X}_t,Y_t$
          などがすべて正規分布にしたがい, それらの母平均値, 母共分散の間の関係式をつかって解析できる.
        </li>
        <li>
          制御工学でよく扱われて, 解法が整備されている. <span class="keyword">フィルタ, 平滑化</span>. カルマンフィルタ
          <a href="https://pykalman.github.io/">pykalman</a>
        </li>
      </ul>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>状態空間モデルの扱いやすい場合2:隠れマルコフモデル</b>
      </v-alert>
      <ul>
        <li>「$\mathbf{X}_t$が離散型確率変数の場合」を考えたい. $X_t=1,2,\cdots,n$.</li>
        <li>
          システムモデルは「 $\mathbf{X}_t$ が確率的に時間発展する」ことを表すので, マルコフ連鎖で書くのが自然. $M$は推移確率行列.
          <span class="citing">計算科学B, 確率モデル及び実習</span>
          \[ \begin{aligned} P(X_t=1)&=M_{11}P(X_{t-1}=1)+M_{12}P(X_{t-1}=2)+\cdots+M_{1n}P(X_{t-1}=n)\\
          P(X_t=2)&=M_{21}P(X_{t-1}=1)+M_{22}P(X_{t-1}=2)+\cdots+M_{2n}P(X_{t-1}=n)\\ &\vdots\\
          P(X_t=n)&=M_{n1}P(X_{t-1}=1)+M_{n2}P(X_{t-1}=2)+\cdots+M_{nn}P(X_{t-1}=n) \end{aligned} \]
        </li>
        <li>観測できない(隠れた)$X=1,2$という状態があり, ある法則で時間発展する. 観測される$Y_t$ の値は$X$ から決まる.</li>
      </ul>

      <v-alert text class="my-5" color="green darken-4" border="left" elevation="5"><b>時系列の機械学習</b> </v-alert>
      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>時系列の機械学習</b>
      </v-alert>
      <p>因果関係, ある時点以前のデータから以降のデータを予測することの需要が大きい, ことから次のように行われる</p>
      <ol>
        <li>観測データ $x_t$を 前半の $x_{\mathrm{train}t}$と, 後半の $x_{\mathrm{test}t}$とに分ける</li>
        <li>
          $x_{\mathrm{train}t}$から, モデル, パラメタを推定する.
          <ul>
            <li>
              誤差最小や尤度最大, などの原理がありうるが, パラメタの個数を変える変更(例$\mathrm{AR}(m)$の$m$の変更)の際は, AIC,
              BICなどの情報量規準で考えることになる.
            </li>
          </ul>
        </li>
        <li>推定したモデル, パラメタから, $\hat{x}_t$ を作る.</li>
        <li>
          $\hat{x}_t$ と $x_{\mathrm{train}t}$ との誤差を確認する. [statsmodelsでは predict() で求められることが多い. fittedvalues
          という名前になっていることがある] 初項から何個かは $\hat{x}_t$ が作れないことがある.
        </li>
        <li>$\hat{x}_t$ と $x_{\mathrm{test}t}$ との誤差を確認する. [statsmodelsでは predict() で求められることが多い.]</li>
      </ol>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>ライブラリ pmdarima</b>
      </v-alert>
      <p>SARIMA(p,d,q,P,D,Q,m)用の関数. statsmodels の ar_model や arma_model とはまた別のフレイバー.</p>
      <p>Notebook参照</p>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>ライブラリ Prophet</b>
      </v-alert>
      <p>日ごとのデータを扱う ライブラリ. Facebook が開発するオープンソース. 祝日のデータなども総動員して自動化されている.</p>
      <p>Notebook参照</p>

      <v-alert text dense class="my-5" max-width="450" color="green darken-2" border="left" elevation="2"
        ><b>その他の時系列の機械学習</b>
      </v-alert>
      <ul>
        <li>RNN=Recurrent Neural Network, LSTM</li>
        <li>自然言語は, 順番がついた文字や単語の列であることから, 時系列解析と共通点がある</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: '多変量解析☆演習 L15 学習支援',
    }
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  mounted() {
    this.$recordAccess()
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
  },
}
</script>

<style scoped>
@import '../node_modules/katex/dist/katex.min.css';

.index {
  font-size: 16px;
  font-family: 'RocknRoll One', sans-serif;
}
.index-center {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
h2 {
  background-color: Green;
}
h3 {
  background-color: YellowGreen;
}
.block-title {
  background-color: #ddffff;
}
.block-body {
  background-color: #eeffff;
}
.break {
  break-after: page;
}
.bold {
  font-size: 16px;
}
.keyword {
  font-weight: bold;
  color: red;
}
.alert {
  font-weight: bold;
  color: red;
}
.citing {
  font-weight: bold;
  color: rgb(59, 168, 132);
}
.center {
  justify-content: center;
  position: relative;
  margin: auto;
}
.v-card__title {
  font: bold !important;
}
.v-card__text {
  font-size: 12pt;
  color: black !important;
  overflow: auto;
}
code {
  background-color: #2e2e2e !important;
  color: white !important;
}

.hljs.python::before {
  content: 'Python';
  background-color: #626832;
  padding: 3px;
}

.hljs.C::before {
  content: 'C';
  background-color: #32684d;
  padding: 5px;
}
</style>
