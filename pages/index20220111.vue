<template>
  <v-row justify="center" class="index">
    <v-col cols="12">
      <v-parallax dark height="200" src="https://beiz.jp/images_P/green/green_00010.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="10">
            <h1 class="text-h4 mb-4">多変量解析☆演習</h1>
            <h4 class="subheading">L14 自己回帰モデルAR(m), 移動平均モデルMA(k)</h4>
            <h4></h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>

    <v-col v-katex cols="10" class="">
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
              <v-list-item-title>確率過程(母ナントカ)を時系列データ(標本ナントカ)と対比して説明できる.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-flag-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>確率過程のひとつである自己回帰モデルAR(\(m\))を説明できる.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-flag-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>確率過程のひとつである自己回帰モデルMA(\(k\))を説明できる.</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div><a href="https://www.data.math.ryukoku.ac.jp/course/mva_2021">多変量解析☆演習</a></div>

      <v-alert text class="my-5" color="green darken-4" icon="mdi-bell-plus" border="left" elevation="5"
        ><b>L13の補足</b>
      </v-alert>
      <p><a href="https://www.data.math.ryukoku.ac.jp/course/mva_2021/w14.pdf">L13のQuizの略解</a></p>

      <p>
        データ $ \{X_t\}_{t=0,1,\ldots,L-1} $ の周期性を知るには, <span class="keyword">離散フーリエ変換</span>も使える.
        フーリエ変換 $$ \tilde{X}_s=\sum_{t=0}^{L-1} e^{-\frac{2\pi s t}{L}} X_t $$ で, $ |\tilde{X}_s|^2 $ が大きいなら,
        周期\(L/s\)の成分の寄与が大きい.
      </p>
      <div class="citing">フーリエ解析</div>
      <hr />

      <v-alert text class="my-5" color="green darken-4" icon="mdi-note" border="left" elevation="5"
        ><b>時系列の母ナントカ</b>
      </v-alert>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>時系列データは確率過程の標本</b>
      </v-alert>

      <p>
        時系列データは確率変数の標本と思える. 為替相場が, 同じルール,
        同じ状況でパラレルワールドでスタートしても別の値動きをしうる. どんな母ナントカの標本と思えるだろう?
      </p>

      <v-row>
        <v-col cols="10">
          <v-card color="light-blue lighten-5" class="my-4">
            <v-sheet color="light-blue darken-1">
              <v-card-title color="" class="py-1 pl-3 white--text">確率過程(の特別なケース)</v-card-title>
            </v-sheet>
            <v-card-text>
              時刻 \(t\) に対した連続型確率変数の列 \(\{X_t\}_{t=0,1,\cdots}\)を確率過程という.<br />
              <span class="alert">
                大注意: \(X_t\)は独立でも同分布でもない! 1回サイコロを振ると(標本抽出すると), \(X_0,X_1,\cdots\)がぜんぶでてくる.
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>単回帰でどう?</b>
      </v-alert>
      <p>時系列データを見ると, 次のように単回帰分析したくなるかも.</p>
      <p></p>
      <ul>
        <li>$ t $ を説明変数 (いままでの $ x $ )</li>
        <li>$ X $ を目的変数 (いままでの $ y $ )</li>
        <li>$ X, \epsilon_t $ が確率変数</li>
      </ul>

      $$ \begin{aligned} X_t=\beta_0+\beta_1 \times t + \epsilon_t,\quad \text{\(\epsilon_t\)は独立同分布} ,\quad
      \epsilon_t\sim\mathrm{N}(0,\sigma^2), . \end{aligned} $$

      <p>これで済む場合もあるけど, つまらなくて単純. トレンドは\(\beta_0+\beta_1 t\), 周期なし, \(X_t\)は独立.</p>

      $$ \begin{aligned} \mathrm{Cov}[X_1,X_2] &= \mathrm{Cov}[\epsilon_1,\epsilon_2] \quad
      \color{#0000FF}{\text{(確率変数以外は共分散に関係しない)}}\\ &= 0 \end{aligned} $$

      <p>以下では, もっと複雑で面白い場合を扱う.</p>
      <p>そこでは, $t$ でなく $x_{t-1}$ を説明変数にする(ようなもの)</p>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>1次の自己回帰モデルAR(\(1\)) auto regression</b>
      </v-alert>

      <v-row>
        <v-col cols="10">
          <v-card color="light-blue lighten-5" class="my-4">
            <v-sheet color="light-blue darken-1">
              <v-card-title color="" class="py-1 pl-3 white--text">1次の自己回帰モデルAR($1$)</v-card-title>
            </v-sheet>
            <v-card-text>
              <ul>
                <li>\(\{\epsilon_t\}_{t=1,\ldots,}\): 連続型確率変数の列</li>

                <li>\(\{X_t\}_{t=0,1,\cdots}\): 連続型確率変数の列</li>
                <li>\(\phi_1\): 定数</li>
              </ul>

              \[X_t=\phi_1 \cdot X_{t-1}+\epsilon_t.\quad (t\geq1)\] ただし, \(\epsilon_t\) \(t=0,1,2,\ldots\)は,
              <ul>
                <li>WN1: \(\mathrm{E}[\epsilon_t]=0\)</li>

                <li>WN1a: \(\mathrm{E}[\epsilon_t \epsilon_t]=\sigma^2\)</li>
                <li>WN1b: \(\mathrm{E}[\epsilon_t \epsilon_s]=0\) &nbsp; \((t\neq s)\) 独立</li>

                <li>\(\mathrm{E}[X(t)\epsilon_s]=0\) &nbsp; \((t \lt s)\)</li>
              </ul></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>

      <p>
        \(\epsilon_t\)の「互いに無関係さ」に対しては,
        <span class="alert">独立同分布, \(\epsilon_t\sim\mathrm{N}(0,\sigma^2)\)</span>のような分布ベースの強い仮定ではなく,
        <span class="alert">母共分散が0</span>という母期待値ベースの弱い仮定を置いている. WN1, WN2 を満たす\(\epsilon_t\)を,
        ホワイトノイズ, white noise, 白色雑音という.
      </p>

      <p>例1: 感染症の患者数</p>

      <p>例2: \(\phi_1=1\):ランダムウォーク</p>
      <div class="citing">確率モデル及び演習</div>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>AR($1$) $\mathrm{AR}(1)$の生成</b>
      </v-alert>
      <p>漸化式のりで計算できる.</p>
      $$ \begin{aligned} X_t &= \phi_1 X_{t-1}+\epsilon_t \\ &= \phi_1 (\phi_1 X_{t-2}+\epsilon_{t-1})+\epsilon_t \\ &= \phi_1
      (\phi_1(\phi_1 X_{t-3}+\epsilon_{t-2})+\epsilon_{t-1})+\epsilon_t \\ &= \cdots \\ &= \phi_1^t X_0 +
      \phi_1^{t-1}\epsilon_1+\phi_1^{t-2}\epsilon_2+\cdots + \phi_1^0\epsilon_t \\ &= \phi_1^t X_0 + \sum_{k=0}^{t-1} \phi_1^k
      \epsilon_{t-k} \\ &= \phi_1^t X_0 + \frac{1-\phi_1^t}{1-\phi_1} \end{aligned} $$

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>時系列の定常性</b>
      </v-alert>
      <p>ここに, 一般論, 時系列が定常であることの定義を挿入</p>

      <v-row>
        <v-col cols="10">
          <v-card color="light-blue lighten-5" class="my-4">
            <v-sheet color="light-blue darken-1">
              <v-card-title color="" class="py-1 pl-3 white--text">時系列の(弱い意味での)定常性</v-card-title>
            </v-sheet>
            <v-card-text>
              時系列 \(\{X_t\}\) が(弱い意味で)定常であるとは, 次の両方を満たすこと.
              <ul>
                <li>\(\mathrm{E}[X_t]\)が\(t\)によらないこと.</li>
                <li>\(\mathrm{Cov}[X_t, X_{t-s}]\)が\(t\)によらないこと.</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <p>分布や高次のモーメントは\(t\)に依存してもよい(依存しない\(\Leftrightarrow\)強い意味での定常性)</p>

      $ x_t=\phi_1^t X_0 + \sum_{k=0}^{t-1} \phi_1^k \epsilon_{t-k} $ は, $ |\phi_1| \lt1 $ なら $ t \rightarrow + \infty $
      で定常になる望みがある.

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>AR(\(1\))の母平均値, 母共分散</b>
      </v-alert>
      \[ \begin{aligned} \mathrm{E}[X_t] &=\mathrm{E}[\phi_1^t X_0 + \sum_{k=0}^{t-1} \phi_1^k \epsilon_{t-k}]\\ &=\phi_1^t
      \mathrm{E}[X_0] \end{aligned} \] \[ \begin{aligned} \mathrm{V}[X_t] &=\mathrm{V}[\phi_1^t X_0 + \sum_{k=0}^{t-1} \phi_1^k
      \epsilon_{t-k}]\\ &=\mathrm{V}[\phi_1^t X_0] + \sum_{k=0}^{t-1} \mathrm{V}[\phi_1^k\epsilon_{t-k}]\\
      &=\phi_1^{2t}\mathrm{V}[X_0] + \sum_{k=0}^{t-1} \phi_1^{2k} \sigma^2\\ &=\phi_1^t\mathrm{V}[X_0] +
      \frac{1-\phi_1^{2t}}{1-\phi_1^2} \sigma^2 \end{aligned} \]

      <p>
        \(|\phi_1| &lt; 1, t\rightarrow+0\)で, 定常の望みあり, \(\mathrm{V}[X_t]\)も一定. 以下,
        簡単のため\(\mathrm{E}[X_0]=\mathrm{E}[X_t]=0\)と仮定.
      </p>

      $$ \begin{aligned} \mathrm{Cov}[X_t,X_{t-s}] &= \mathrm{E}[X_tX_{t-s}] \\ &= \mathrm{E}[(\phi_1^t X_0 + \sum_{k=0}^{t-1}
      \phi_1^k \epsilon_{t-k}) \times (\phi_1^{t-s} X_0 + \sum_{\ell=0}^{t-s-1} \phi_1^\ell \epsilon_{t-s-\ell})]\\ \end{aligned}
      $$

      <p>展開すると 0 にならないのは, \(\mathrm{E}[X_0X_0]\), \(\mathrm{E}[\epsilon_k \epsilon_k]=\sigma^2\)のみ.</p>

      <p style="border: 2px dashed red">
        $$ \begin{aligned} \mathrm{Cov}[X_t,X_{t-s}] &=\phi_1^{2t-s}\mathrm{E}[X_0X_0]
        +(\phi_1^{2t-2s-2}+\phi_1^{2t-2s-4}+\cdots+\phi_1^0)\phi_1^s)\sigma^2\\ &=\phi_1^{2t-s}\mathrm{E}[X_0X_0]
        +\frac{1-(\phi_1^2)^{t-s}}{1-\phi_1^2}\phi_1^s \sigma^2 \rightarrow \begin{cases} \frac{\phi_1^s\sigma^2}{1-\phi_1^2}
        (|\phi_1|\lt1)\\ \approx t & (|\phi_1|=1)\\ \approx t \phi_1^{2t} & (|\phi_1|\gt1) \end{cases} \end{aligned} $$
      </p>

      <p>
        \(|\phi_1|\lt1\)のとき定常. このとき, ラグ\(s\)の自己相関係数は \(r(s)= \frac{\phi_1^s\sigma^2}{1-\phi_1^2} \quad
        (|\phi_1|\lt1)\) つまり等比数列. そうなってるやつあったでしょ? あれから\(\phi_1\)が読み取れる.
      </p>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
        ><b>AR(\(1\))の自己相関係数とコレログラム</b>
      </v-alert>

      <v-row>
        <v-col cols="5">
          <v-img :src="require('@/assets/img/arp09t.png')"> </v-img>
        </v-col>
        <v-col cols="5">
          <v-img :src="require('@/assets/img/arp09c.png')"> </v-img>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-alert text class="my-5" color="green darken-4" icon="mdi-note" border="left" elevation="5"
        ><b>\(m\)次の自己回帰モデルAR(\(m\))</b>
      </v-alert>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>\(m\)次の自己回帰モデルAR(\(m\))</b>
      </v-alert>

      <v-row>
        <v-col cols="10">
          <v-card color="light-blue lighten-5" class="my-4">
            <v-sheet color="light-blue darken-1">
              <v-card-title color="" class="py-1 pl-3 white--text">\(m\)次の自己回帰モデルAR(\(m\))</v-card-title>
            </v-sheet>
            <v-card-text>
              <ul>
                <li>\(\{\epsilon_t\}_{t=1,\ldots,}\): 連続型確率変数の列</li>
                <li>\(\{X_t\}_{t=0,1,\cdots}\): 連続型確率変数の列</li>
                <li>\(\phi_0=1, \phi_1,\ldots, \phi_m\) 定数</li>
              </ul>

              \[X_t=\phi_1 \cdot X_{t-1}+\cdots+\phi_m \cdot X_{t-m}+\epsilon_t.\quad (t\geq1)\]
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <p>$m$ 個前の時刻の $X_{t-s}$ から影響する.</p>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>Quiz L14-1</b>
      </v-alert>
      <a href="../w14.pdf">Quiz L14-1</a>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>AR($1$) の生成</b>
      </v-alert>
      <p>母集団からの標本抽出=確率過程のシミュレーション</p>
      <div class="citing">シミュレーション及び実習(確率の現れないシミュレーション)</div>
      <p>ARMAはAR($1$)</p>
      を一般化したモデル

      <v-row class="my-0">
        <v-col cols="8">
          <pre v-highlightjs>
        <code class="python">
from statsmodels.tsa.arima_process import ArmaProcess
ar=[1,-0.9,0.5]  # [a0,-a1,-a2,-a3,..]. a1以降は符号を逆にする
ma=[1]       # 現時点ではこうする
AR=ArmaProcess(ar,ma) # 自己回帰モデルを計算するオブジェクト
x=AR.generate_sample(nsample=50) # 時間の長さ=50
        </code>
      </pre>
        </v-col>
      </v-row>

      <p>これは, $ \phi_1=0.9,$ $ \phi_2=-0.5 $ という例.</p>

      <p>リスト<code>x</code>が\(x_0,x_1,x_2,\ldots,x_{49}\)に代入される.</p>

      <v-row>
        <v-col cols="8">
          <pre v-highlightjs>
      <code class="python">
x=[2] # x1
t=1
phi1=1.0
for t in range(1,100,1):
  xnext=x[t-1]*phi1 + stats.norm(loc=0,scale=1).rvs(size=1)[0]
  x.append(ynext
      </code>
      </pre>
        </v-col>
      </v-row>
      字下げした部分がブロック. Cでいうなら,

      <v-row>
        <v-col cols="8">
          <pre v-highlightjs>
      <code class="C">
double x[101];
double xnext;
int t;
x[0]=2;
phi1=1.0;
for(t=1; t &lt; =100; t+=1){
  xnext=x[t-1]*phi1+乱数();
  x[t]=xnext;
}
      </code>
      </pre>
        </v-col>
      </v-row>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>AR(\(m\))モデルの推定と時系列の予測</b>
      </v-alert>
      <v-row>
        <v-col cols="8">
          <pre v-highlightjs>
        <code class="python">
from statsmodels.tsa import ar_model
model = ar_model.AR(x)  # modelは ARモデルでの予測を行うオブジェクト. xは時系列を収めた Series
result = model.fit(maxlag=12, ic='aic') # mが最大12までの範囲で よく予測するmと係数を探せ. 基準はAIC(魔法)
result.k_ar # k_ar とは mのこと
result.fittedvalues   # xと同じ範囲を予測した時系列
result.predict(t1,t2) # t1からt2までの期間を予測した時系列
      </code></pre>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-alert text class="my-5" color="green darken-4" icon="mdi-note" border="left" elevation="5">
        <b>\(k\)次の移動平均モデルMA(\(k\))</b>
      </v-alert>
      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>\(k\)次の移動平均モデルMA(\(k\))</b>
      </v-alert>

      <v-row>
        <v-col cols="10">
          <v-card color="light-blue lighten-5" class="my-4">
            <v-sheet color="light-blue darken-1">
              <v-card-title color="" class="py-1 pl-3 white--text">$k$ 次の自己回帰モデルMA(\(k\))</v-card-title>
            </v-sheet>
            <v-card-text>
              <ul>
                <li>\(\{\epsilon_t\}_{t=1,\ldots,}\): 連続型確率変数の列</li>

                <li>\(\{X_t\}_{t=0,1,\cdots}\): 連続型確率変数の列</li>
                <li>\(\theta_0=1, \theta_1,\ldots\): 定数</li>
              </ul>

              \[X_t=\beta_0+ \epsilon_t+\theta_1\epsilon_{t-1}+\cdots +\theta_k\epsilon_k.\quad (t\geq k)\] ただし, \(\epsilon_t\)
              \(t=0,1,2,\ldots\)は,
              <ul>
                <li>WN1 \(\mathrm{E}[\epsilon_t]=0\)</li>

                <li>WN1a \(\mathrm{E}[\epsilon_t \epsilon_t]=\sigma^2\) &nbsp; \(\sigma\)</li>
                <li>WN1b \(\mathrm{E}[\epsilon_t \epsilon_s]=0\) &nbsp; \((t\neq s)\) 独立</li>

                <li>\(\mathrm{E}[X(t)\epsilon_s]=0\) &nbsp; \((t\gt s)\)</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>移動平均モデルMA(\(k\))の母平均値・母共分散</b>
      </v-alert>
      $$ \mathrm{E}[X_t]=0 $$ $$ \begin{aligned}
      \mathrm{V}[X_t]&=\mathrm{V}[\epsilon_t+\theta_1\epsilon_{t-1}+\cdots+\theta_k\epsilon_k]\\ &=
      \mathrm{V}[\epsilon_t]+\theta_1^2\mathrm{V}[\epsilon_{t-1}]+\cdots+\theta_k^2\mathrm{V}[\epsilon_k]\\
      &=(1+\theta_1^2+\cdots+\theta_k^2)\sigma^2 \end{aligned} $$ $$ \begin{aligned} \mathrm{Cov}[X_t,X_{t-s}]&=\\ &=\cdots\\ &=
      \begin{cases} 0&(k\gt s)\\ (\theta_0\theta_{s}+\theta_1\theta_{s+1}+\cdots +\theta_{k-s}\theta_k)\sigma^2 &(k\leq s)
      \end{cases} \end{aligned} $$

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>コレログラム</b>
      </v-alert>
      <v-row>
        <v-col>
          <v-img :src="require('@/assets/img/map09t.png')"> </v-img>
        </v-col>
        <v-col>
          <v-img :src="require('@/assets/img/map09c.png')"> </v-img>
        </v-col>
      </v-row>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>Quiz L14-2</b>
      </v-alert>
      <a href="../w14.pdf">Quiz L14-2</a>

      <v-alert
        text
        dense
        class="my-5"
        max-width="450"
        color="green darken-2"
        icon="mdi-checkbox-marked-circle"
        border="left"
        elevation="2"
      >
        <b>MA(\(k\))の生成</b>
      </v-alert>

      <v-row>
        <v-col cols="8">
          <pre v-highlightjs>
        <code class="python">
from statsmodels.tsa.arima_process import ArmaProcess
ar = [1] #
ma = [1,0.5,0.2] # [theta_0,theta_1,theta_2]
MA = ArmaProcess(ar,ma) # 自己回帰モデルを計算するオブジェクト
x = MA.generate_sample(nsample = 50) # 時間の長さ=50
        </code>
      </pre>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-alert text class="my-5" color="green darken-4" icon="mdi-note" border="left" elevation="5">
        <b>バリエーション</b>
      </v-alert>
      <ul>
        <li>\(m,k\)次の自己回帰移動平均モデルARMA(\(m,k\)) 漸化式の右辺が, AR(\(m\))とMA(\(k\))の和になっているもの.</li>
        <li>\(m,k\)次の自己回帰和分移動平均モデルARIMA(\(m,k\)).</li>
        階差がARMA(\(m,k\))にしたがう時系列. それ自身は非定常でありうる.
        <li>︙</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: '',
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
  },
}
</script>

<style scoped>
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

.keyword {
  color: red;
}

.v-card__title {
  font: bold !important;
}
.v-card__text {
  color: black !important;
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
