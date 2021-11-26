<template>
  <div>
    <div v-for="i in 1000" :key="i" :style="bg">{{ -i }}</div>
  </div>
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
