<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="d-print-none"
      clipped
      color="grey darken-2"
      mobile-breakpoint="600"
      fixed
      src="https://pro-foto.jp/free/img/images_big/C01015-001H.jpg"
      app
      dark
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-double-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <sidebar-menu :menu="sidemenu" :collapsed="true" width="200px" class="d-none d-sm-flex" /> -->
    <v-app-bar class="d-print-none" color="white" clipped-left fixed short elevate-on-scroll app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- <v-btn elevation="2" small icon to="/" class="mr-2">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn elevation="2" small icon to="/login" class="mr-2">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn outlined elevation="2" small icon to="/profile" class="mr-2">
        <v-icon>mdi-account</v-icon>
      </v-btn> -->

      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!--
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->

      <v-toolbar-title class="tiny" v-text="title" />
      <v-spacer />

      <div v-if="$store.state.authUser">
        <span class="mr-3 hidden-xs" v-text="$store.state.authUser.displayName + 'さん'"></span>
        <v-menu v-if="$store.state.authUser" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn elevation="2" icon v-bind="attrs" v-on="on">
              <v-avatar size="40">
                <v-img :src="$store.state.authUser.photoURL"></v-img>
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(usermenuItem, usermenusIndex) in usermenus"
              :key="usermenusIndex"
              :to="usermenuItem.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon :color="usermenuItem.color">{{ usermenuItem.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="usermenuItem.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid style="pl-13">
        <Nuxt />
      </v-container>
    </v-main>

    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      fixed
      color="grey darken-2"
      src="https://3.bp.blogspot.com/-cEA4AXbk3e4/V5XcozPUGnI/AAAAAAAA8qg/MdkPyz2mcwAAe2bHLdcECN7j0o0cnLbMQCLcB/s2000/bg_abstract1_blue.png"
      dark
      app
    >
      <v-spacer /><span>&copy; {{ new Date().getFullYear() }}</span>
      <span>{{ title }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // middleware: 'auth',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
        {
          icon: 'mdi-hexagon-slice-6',
          title: 'katex',
          to: '/katex/collection',
        },
        // {
        //   icon: 'mdi-trash-can-outline',
        //   title: 'trash',
        //   to: '/trash',
        // },
      ],
      usermenus: [
        {
          icon: 'mdi-account',
          title: 'ユーザー情報',
          to: '/profile',
          color: 'primary',
        },
        {
          icon: 'mdi-cog',
          title: '設定',
          to: '/config',
        },
        {
          icon: 'mdi-logout-variant',
          title: 'ログアウト',
          to: '/logout',
          color: 'red',
        },
      ],
      sidemenu: [
        {
          header: true,
          title: '',
          hiddenOnCollapse: true,
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: '/katex',
          title: 'KaTeX',
          icon: 'fas fa-book-open',
        },
        {
          href: '/trash',
          title: 'Trash',
          icon: 'fas fa-trash',
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link',
            },
          ],
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'mva',
    }
  },
  created() {
    // console.log(this.$store.state.user)
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
    },
  },
}
</script>

<style>
.tiny {
  font-size: 10pt;
}
</style>
