<script setup>
  import CaptureActionButton from '@/entities/ui/capture/CaptureActionButton.vue';
  import { ref } from 'vue';
  const props = defineProps(['setCaptureComplate']);
  const typeRef = ref(0);
  console.log(props);
  const step = () => {
    typeRef.value = typeRef.value + 1;
    console.log(typeRef.value);
  };
</script>
<template>
  <main>
    <div v-if="typeRef === 2" class="guide-time">00:05</div>
    <CaptureActionButton v-if="typeRef === 0" @click-center="step" :type="typeRef" />
    <CaptureActionButton v-if="typeRef === 1" @click-left="step" @click-right="step" :type="typeRef" />
    <CaptureActionButton v-if="typeRef === 2" @click-left="" @click-right="setCaptureComplate" :type="typeRef" />
    <div v-if="typeRef === 2" class="guide-text">영상 생성 중</div>
  </main>
</template>
<style scoped>
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(calc(85 * var(--vh)));
    position: relative;
  }
  .guide-time {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: var(--font-size-md);
    border-radius: 50px;
    width: 91px;
    text-align: center;
  }
  .guide-text {
    padding: 10px 15px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: var(--font-size-xs);
    border-radius: 50px;
    min-width: 91px;
    text-align: center;
    width: fit-content;
  }
</style>
