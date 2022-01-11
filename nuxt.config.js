import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'mva',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
      },
    ],
    script: [
      // { src: '@/assets/script/context-menu.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/katex-collapsible.css',
    '@/assets/css/katex-context-menu.css',
    '~/node_modules/highlight.js/styles/vs2015.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuetify.js',
    '~/plugins/katex.js',
    '~/plugins/firebase.js',
    '@/plugins/vue-context.js',
    '@/plugins/vue-highlightjs',
    { src: '@/plugins/katex-localStorage.js', ssr: false },
    { src: '@/plugins/katex-context-menu.js', ssr: false },
    { src: '@/plugins/katex-collapsible.js', ssr: false },
    // { src: '@/plugins/window.js', ssr: false },
    { src: '@/plugins/sidebar.js', mode: 'client' },
    // { src: '@/plugins/date-dropdown.js', mode: 'client' },
    // { src: '@/plugins/enlargeable-image.js', mode: 'client' },
    { src: '@/plugins/multi-split-pane.js', mode: 'client' },
    // { src: '@/plugins/tour.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDqVG3gKZR1sQDLLKHf9oit_lVVjE4nB5o',
          authDomain: 'mva-fb-2eb01.firebaseapp.com',
          projectId: 'mva-fb-2eb01',
          storageBucket: 'mva-fb-2eb01.appspot.com',
          messagingSenderId: '380430565106',
          appId: '1:380430565106:web:d03b7124b5c8f082be5a6b',
          measurementId: 'G-J0JGDNBBCM',
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
            },
            ssr: true,
          },
          firestore: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts: ['/firebase-auth-sw.js'],

      dev: true,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Noto Sans JP',
      },
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    dir: 'public',
  },
  ssr: false,
  target: 'static',
  vue: {
    config: {
      productionTip: false,
      devtools: false,
    },
  },
}
