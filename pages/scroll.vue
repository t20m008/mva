<template>
  <v-row style="overflow-y: hidden">
    <v-col cols="4" style="overflow-y: scroll">
      <div>
        <div v-for="i in 1000" :key="i" :style="bg">{{ i }}</div>
      </div>
    </v-col>
    <v-col cols="8" style="overflow-y: auto">
      <Chat />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      num: 100,
      bg: 'color: blue',
    }
  },
}
</script>
