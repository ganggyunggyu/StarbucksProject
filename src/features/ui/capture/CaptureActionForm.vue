<script setup>
import CaptureActionButton from '@/entities/ui/capture/CaptureActionButton.vue';

const props = defineProps(['handleIsCapture', 'captureStep', 'handleNextStep', 'handlePrevStep']);
</script>
<template>
  <main class="main-container">
    <transition name="opacity">
      <div v-if="captureStep === 2" class="guide-time">00:05</div>
    </transition>
    <CaptureActionButton
      v-if="captureStep === 0"
      @click-center="handleNextStep"
      :type="captureStep"
    />
    <CaptureActionButton
      v-if="captureStep === 1"
      @click-left="handleNextStep"
      @click-right=""
      :type="captureStep"
    />
    <CaptureActionButton
      v-if="captureStep === 2"
      @click-left="handlePrevStep"
      @click-right="handleIsCapture"
      :type="captureStep"
    />
    <transition name="opacity">
      <div v-if="captureStep === 2" class="guide-text">영상 생성 중</div>
    </transition>
  </main>
</template>
<style scoped>
.main-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(calc(85 * var(--vh)));
  position: relative;
  z-index: 1;
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
