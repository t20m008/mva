<template>
  <v-row v-katex class="pa-4">
    <v-col v-for="i in 12" :key="i" cols="3" class="katex-html2 ma-2" style="border: 1px solid blue"> $${{ i }}x=10$$ </v-col>

    <v-col cols="12" v-for="j in 100" :key="j + 12">{{ j }}</v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line prefer-const */
export default {
  mounted() {
    this.$runCtx()
  },
}
</script>
