<script setup>
  const props = defineProps(['lable']);
</script>
<template>
  <div>
    <p>{{ props.lable }}</p>
  </div>
</template>
<style scoped>
  div {
    width: 80px;
    height: 30px;
    background-color: var(--color-black);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
  }
  p {
    color: white;
    font-size: var(--font-size-xs);
  }
</style>
