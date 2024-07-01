<script setup>
  const props = defineProps(['lable', 'class']);
</script>

<template>
  <button :class="props.class">
    {{ props.lable }}
  </button>
</template>

<style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }
  .red {
    background-color: var(--color-red);
    color: white;
  }
  .green {
    background-color: var(--color-green);
    color: red;
  }
  .white-text-red {
    background-color: white;
    color: var(--color-red);
    border: 1px solid var(--color-red);
  }
  .white-text-green {
    background-color: white;
    color: var(--color-green);
  }
  .white-text-mint {
    background-color: white;
    color: var(--color-mint);
  }
  .white-text-yellow-green {
    background-color: white;
    color: var(--color-yellow-green);
  }
  .yellow-green {
    background-color: var(--color-yellow-green);
    color: white;
  }
  .gray-text-dark-gray {
    background-color: var(--color-light-gray);
    color: var(--color-dark-gray);
  }
  .gray-text-white {
    background-color: var(--color-gray);
    color: white;
  }
  .sm {
    width: 110px;
    height: 50px;
  }
  .lg {
    width: 240px;
    height: 50px;
    font-size: var(--font-size-lg);
    font-weight: 700;
  }
</style>
