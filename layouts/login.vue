<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" color="grey lighten-2" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
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
