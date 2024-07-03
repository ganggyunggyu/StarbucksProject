<script setup>
import BottomNavigation from '../features/ui/capture/BottomNavigation.vue';
import RefreshIcon from '@shared/ui/icon/RefreshIcon.vue';
import SaveIcon from '@shared/ui/icon/SaveIcon.vue';
import PhotoCardIcon from '@shared/ui/icon/PhotoCardIcon.vue';
import ShareIcon from '@shared/ui/icon/ShareIcon.vue';
import { CAPTURE_BACKGROUND_IMAGE } from '@/constant/IMAGE_URL';
import * as Vue from 'vue';
import CaptureActionForm from '@/features/ui/capture/CaptureActionForm.vue';
import Tutorial from '@/features/ui/capture/Tutorial.vue';
import router from '@/router';
import ShareModal from '@/entities/ui/modal/ShareModal.vue';
import { onBeforeRouteLeave } from 'vue-router';
import WarningModal from '@/entities/ui/modal/WarningModal.vue';
import WarningModal2 from '@/entities/ui/modal/WarningModal2.vue';
import { animate, init, setPosition } from '@/three/capture/init';

const isCapture = Vue.ref(false);
const captureStep = Vue.ref(0);
const isSharedModal = Vue.ref(false);
const isWarningModal = Vue.ref(false);
const isWarningModal2 = Vue.ref(false);

const handleSave = () => {
  console.log('저장 버튼 클릭됨');
};
const redirectComplate = () => {
  router.push('complate');
};
const toggleIsShare = () => {
  isSharedModal.value = !isSharedModal.value;
};
const toggleIsWarning = () => {
  isWarningModal.value = !isWarningModal.value;
};
const handleFirstStep = () => {
  isWarningModal.value = false;
  isWarningModal2.value = false;
  isCapture.value = false;
  captureStep.value = 0;
};
const toggleIsWarning2 = () => {
  isWarningModal2.value = !isWarningModal2.value;
};
const handleNextStep = () => {
  captureStep.value = captureStep.value + 1;
};
const handlePrevStep = () => {
  captureStep.value = captureStep.value - 1;
};
const handleIsCapture = () => {
  isCapture.value = true;
};

const ICONS = [
  { name: 'RefreshIcon', component: RefreshIcon, label: '다시 촬영', onClick: toggleIsWarning2 },
  { name: 'SaveIcon', component: SaveIcon, label: '저장', onClick: handleSave },
  { name: 'PhotoCardIcon', component: PhotoCardIcon, label: '포토카드', onClick: redirectComplate },
  { name: 'ShareIcon', component: ShareIcon, label: '공유', onClick: toggleIsShare },
];

onBeforeRouteLeave((to) => {
  if (to.name === 'Complate') return true;
  if (to.name === 'Event') return true;
  if (isCapture.value) isWarningModal2.value = true;
  if (!isCapture.value) isWarningModal.value = true;
  isSharedModal.value = false;
  return false;
});

Vue.onMounted(() => {});
</script>
<template>
  <transition-group name="opacity">
    <ShareModal v-if="isSharedModal" :closeModal="toggleIsShare" />
    <WarningModal
      v-if="isWarningModal"
      :closeModal="toggleIsWarning"
      :refreshCapture="handleFirstStep"
    />
    <WarningModal2
      v-if="isWarningModal2"
      :closeModal="toggleIsWarning2"
      :refreshCapture="handleFirstStep"
    />
    <Tutorial @click="setPosition" />
    <BottomNavigation v-if="isCapture" :ICONS="ICONS" />
  </transition-group>

  <img class="frame" :src="CAPTURE_BACKGROUND_IMAGE" alt="" />

  <CaptureActionForm
    v-if="!isCapture"
    :handleIsCapture="handleIsCapture"
    :captureStep="captureStep"
    :handleNextStep="handleNextStep"
    :handlePrevStep="handlePrevStep"
  />
</template>
<style scoped>
.frame {
  width: 100%;
  height: calc(100 * var(--vh));
  z-index: -1;
  position: fixed;
}
</style>
