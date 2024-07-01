<script setup>
  import { ref } from 'vue';
  import CaptureOnIcon from '@/shared/ui/icon/CaptureOnIcon.vue';
  import CaptureStopIcon from '@/shared/ui/icon/CaptureStopIcon.vue';
  import CaptureTempStopIcon from '@/shared/ui/icon/CaptureTempStopIcon.vue';
  const props = defineProps(['type', 'onClickCenter', 'onClickLeft', 'onClickRight']);
  const typeRef = ref(null);
</script>

<template>
  <div v-if="props.type === 0" class="capture-button">
    <button @click="onClickCenter">
      <CaptureOnIcon />
    </button>
  </div>
  <div v-if="props.type === 1" class="capture-button-2">
    <button @click="onClickLeft">
      <CaptureOnIcon />
    </button>
    <button @click="onClickRight">
      <CaptureStopIcon />
    </button>
  </div>
  <div v-if="props.type === 2" class="capture-button-2">
    <button @click="onClickLeft">
      <CaptureTempStopIcon />
    </button>
    <button @click="onClickRight">
      <CaptureStopIcon />
    </button>
  </div>
</template>

<style scoped>
  .capture-button button {
    padding: 23px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .capture-button svg {
    width: 27px;
    height: 27px;
  }
  .capture-button-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 40px;
  }
  .capture-button-2 button {
    padding: 20px 25px;
  }
  .guide-time {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: var(--font-size-md);
    border-radius: 50px;
    height: calc(6 * var(--vh));
    width: 91px;
  }
  .guide-text {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: var(--font-size-md);
    border-radius: 50px;
    height: calc(6 * var(--vh));
    width: 91px;
  }
</style>
