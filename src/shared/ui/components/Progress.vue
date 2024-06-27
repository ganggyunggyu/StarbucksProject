<script setup></script>
<template>
  <div>
    <progress value="50" min="0" max="100"></progress>
    <p></p>
  </div>
</template>
<style scoped>
  progress {
    appearance: none;
  }
  progress::-webkit-progress-bar {
    background: rgba(0, 0, 0, 0.2);

    border-radius: 50px;
    height: 8px;
    width: 260px;
    overflow: hidden;
  }

  progress::-webkit-progress-value {
    background: white;
    border-radius: 0px;
    height: 28px;
    width: 48px;
  }
</style>
