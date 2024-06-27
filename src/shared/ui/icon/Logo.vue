<script setup>
  const LOGO_IMAGE = new URL('../../../static/resource/logo.png', import.meta.url).href;

  const props = defineProps(['width', 'height']);
</script>

<template>
  <div :style="`width: ${props.width}; height: ${props.height}`">
    <img :src="LOGO_IMAGE" alt="" />
  </div>
</template>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
