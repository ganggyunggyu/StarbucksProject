<script setup>
  import { onMounted } from 'vue';
  import { setVh, setVw } from './shared/lib/setViewPort';
  import router from './router';
  onMounted(() => {
    setVh();
    setVw();
  });
</script>

<template>
  <router-view :key="router.fullPath" />
</template>

<style scoped></style>
