<template>
  <div>
    <h1>User Profile</h1>
    <p v-if="User != null">Your e-mail is {{ User.email }}</p>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'default',
  middleware: 'auth',
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
