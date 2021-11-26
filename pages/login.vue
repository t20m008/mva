<template>
  <v-row align="center" justify="center" class="ma-0 pa-0">
    <v-col cols="12" class="ma-0 pa-0">
      <div class="header">
        <!--Content before waves-->
        <div class="inner-header flex">
          <v-row>
            <v-col cols="12" class="px-10">
              <p>このページは、多変量解析☆演習の学習支援用ページです。</p>
              <p>下のボタンからGoogleアカウントでログインして下さい。</p>
            </v-col>
            <v-col>
              <v-btn
                fab
                elevation="10"
                :loading="loading"
                :disabled="loading"
                color="green lighten-1"
                class="ma-2 white--text"
                @click="
                  loader = 'loading'
                  signInWithGoogle()
                "
              >
                <v-icon dark> mdi-google </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <!--Waves Container-->
        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <!--Waves end-->
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'login',
  middleware: 'auth',
  data() {
    return {
      icon_google: require('@/assets/google-signin.png'),
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1500)

      this.loader = null
    },
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/')
    }
  },
  mounted() {},
  methods: {
    async signInWithGoogle() {
      const provider = new this.$fireModule.default.auth.GoogleAuthProvider()
      provider.setCustomParameters({
        hd: 'mail.ryukoku.ac.jp',
      })
      await this.$fire.auth.signInWithPopup(provider).then((res) => {
        res.user.getIdToken(true).then((idToken) => {
          localStorage.setItem('access_token', idToken.toString())
          localStorage.setItem('refresh_token', res.user.refreshToken.toString())
        })
      })
    },
  },
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
