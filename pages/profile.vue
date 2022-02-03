<template>
  <div>
    <p class="text-h3">Profile</p>
    <p v-if="User != null">Your e-mail is {{ User.email }}</p>
    <!-- <v-btn @click="logout">ログアウト</v-btn> -->
    <p>
      <NuxtLink to="/" class="text-h5">TOP</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'default',
  data() {
    return {
      User: this.$store.state.authUser,
    }
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
    },
  },
}
</script>
