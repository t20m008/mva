<template>
  <v-row justify="center" class="index">
    <v-col cols="12">
      <v-parallax dark height="200" src="https://beiz.jp/images_P/green/green_00010.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="10">
            <h1 class="text-h4 mb-4">多変量解析☆演習</h1>
            <h4 v-katex class="subheading"></h4>
            <h4></h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>

    <v-col id="stepper" cols="10">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"> 折りたたみと展開 </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2"> 右クリックメニュー </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> 終了 </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            数式の下に表示されているトグルボタンで数式を折りたたんだり、展開することができます。
            <p v-katex>
              $$ \begin{aligned} \int \frac{1}{x(x+2)}dx &= \int \frac{1}{2}\left(\frac{1}{x}+\frac{-1}{x+2}\right) dx \\ &=
              \frac{1}{2}\int \frac{1}{x}dx - \frac{1}{2}\int \frac{1}{x+2}dx \\ &= \frac{1}{2}\left(\log |x| -\log|x+2|\right)+C
              \\ &= \frac{1}{2}\log \left|\frac{x}{x+2}\right|+C \end{aligned} $$
            </p>
            <v-btn
              color="error"
              @click="
                remove()
                doneTutorial = !doneTutorial
              "
            >
              チュートリアルをスキップ
            </v-btn>
            <v-btn color="primary" @click="e1 = 2"> 次へ </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            数式を右クリックするとメニューが開きます。
            <br />そのページ内の全ての数式を一度に折りたたんだり、展開することができます。
            <p v-katex style="overflow-x: auto">
              $$ \sum_{n=1}^{\infty} ar^{n-1} = a + ar + ar^2 + ar^3 + \cdots + ar^{n-1} + \cdots = \frac{a}{1-r} $$
            </p>
            <p v-katex style="overflow-x: auto">
              $$\sum_{ k = 1 }^{ n } k^2 = \overbrace{ 1^2 + 2^2 + \cdots + n^2 }^{ n } = \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 )$$
            </p>
            <v-btn color="success" @click="e1 = 1"> 前へ </v-btn>
            <v-btn color="primary" @click="e1 = 3"> 次へ </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <p>チュートリアルは終了です。</p>
            <p>講義ページへ進んでください。</p>
            <v-btn color="success" @click="e1 = 2"> 前へ </v-btn>
            <v-btn
              color="primary"
              @click="
                remove()
                doneTutorial = !doneTutorial
              "
            >
              終了
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">L14</v-list-item-title>
                <v-list-item-subtitle>自己回帰モデル $ \mathrm{AR}(m) $, 移動平均モデル $ \mathrm{MA}(k) $</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn :disabled="!doneTutorial" text color="teal accent-4" @click="$router.push('14')">Enter</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">L15</v-list-item-title>
                <v-list-item-subtitle>時系列の状態空間モデル・時系列の機械学習</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn :disabled="!doneTutorial" text color="teal accent-4" @click="$router.push('15')">Enter</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col cols="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content v-katex>
                <v-list-item-title class="text-h5 mb-1">LXX</v-list-item-title>
                <v-list-item-subtitle>???</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn disabled text color="teal accent-4" @click="$router.push('??')">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: '多変量解析☆演習 L14 学習支援',
      e1: 1,
      doneTutorial: false,
    }
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  mounted() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }

    this.$recordAccess()
    /* eslint-disable camelcase */
    const NodeList = document.querySelectorAll('span .katex-mathml .katex')
    Array.from(NodeList).forEach((Node) => {
      Node.remove()
    })
    this.$katexLocalStorage()
    const katex_status = this.$getKatexStatus()
    this.$katexCollapsibleNoLog(true, false, katex_status)
    this.$katexContextMenu()

    Array.from(document.getElementsByClassName('katex')).forEach((k) => {})
  },
  methods: {
    remove() {
      const stepper = document.querySelector('#stepper')
      stepper.remove()
    },

    fireStoreSaveDocField() {
      // eslint-disable-next-line no-extra-boolean-cast
      // if (!!this.$fire.auth().currentUser) {
      //   this.$firebase
      //     .firestore()
      //     .collection(CollectionName)
      //     .doc(firebase.auth().currentUser.uid)
      //     .set({
      //       displayName: firebase.auth().currentUser.displayName,
      //       email: firebase.auth().currentUser.email,
      //       uid: firebase.auth().currentUser.uid,
      //     })
      //     .then(() => {
      //       // console.log('fsSaveDocField!')
      //     })
      // }
    },
  },
}
</script>
