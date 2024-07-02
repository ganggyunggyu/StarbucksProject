<script setup>
  const props = defineProps(['ICONS']);
</script>

<template>
  <nav>
    <button v-for="icon in props.ICONS" :key="icon.name" @click="icon.onClick">
      <component :is="icon.component" />
      <p>{{ icon.label }}</p>
    </button>
  </nav>
</template>

<style scoped>
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    height: calc(19 * var(--vh));
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
  }
  nav button {
    flex: 1;
    line-height: 20px;
    font-size: var(--font-size-md);
  }
</style>
