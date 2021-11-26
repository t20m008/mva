<template>
  <v-row>
    <v-col> trash </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      data: 'data',
    }
  },
  beforeCreate() {
    console.log(this.$root.context)
  },
  mounted() {
    alert(localStorage['katex-status'])
    localStorage.clear()
  },
}
</script>
