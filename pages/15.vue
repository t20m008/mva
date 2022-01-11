<template>
  <v-row justify="center" class="index">
    <v-col>L15</v-col>
  </v-row>
</template>

<script>
export default {
  // middleware: 'auth',
  data() {
    return {
      title: '多変量解析☆演習 L15 学習支援',
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

#touch-area1 {
  /* width: 200px;
  height: 200px;
  background-color: bisque; */
}
</style>
