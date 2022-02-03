<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" color="grey lighten-2" dense fixed app>
      <v-icon color="green darken-2" class="pr-2">fas fa-chalkboard-teacher</v-icon>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" color="grey lighten-2" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome2',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire2',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'mva',
    }
  },
}
</script>
