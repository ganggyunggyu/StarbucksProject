<script setup>
  const props = defineProps(['lable', 'class', 'warring', 'type']);
  const isWarring = !!props.warring;
</script>

<template>
  <form>
    <label for="">{{ lable }}</label>
    <input :class="class" :type="type ? type : 'text'" />
    <p :class="isWarring ? '' : 'hide'">{{ props.warring }}</p>
  </form>
</template>

<style scoped>
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 240px;
    padding: 12px 0px;
    font-size: var(--font-size-sm);
  }
  label {
    color: var(--color-gray);
    transition: 0.5s color;
  }
  input {
    border-bottom: 1px solid var(--color-red);
    padding: 5px 0;
  }

  p {
    color: var(--color-red);
    position: absolute;
    right: 5px;
    bottom: -15px;
  }
  .hide {
    display: none;
  }

  div:focus-within label {
    color: var(--color-red);
  }
</style>
