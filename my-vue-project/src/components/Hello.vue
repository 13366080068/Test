<template>
<div>{{ $route.params.id + $route.query.username }}</div>
</template>

<script>
  export default {
    name: 'Hello',
  }
</script>
