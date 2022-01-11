<template>
  <v-row>
    <v-col>
      <p class="text-h3">Config</p>
      <h1>Comming Soon...</h1>
      <NuxtLink to="/" class="text-h5">TOP</NuxtLink>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Config',
  layout: 'default',
  data() {
    return {
      User: this.$store.state.authUser,
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
    },
  },
}
</script>
