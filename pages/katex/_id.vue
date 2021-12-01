<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  validate({ params, query, store }) {
    console.log(params, query, store)
    return /^\d+$/.test(params.id)
  },
}
</script>
