<script setup>
  import { onMounted } from 'vue';
  import { setVh, setVw } from './shared/lib/setViewPort';

  onMounted(() => {
    setVh();
    setVw();
  });
</script>

<template>
  <router-view />
</template>

<style scoped></style>
