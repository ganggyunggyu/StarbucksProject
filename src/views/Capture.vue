<script setup>
  import BottomNavigation from '../features/ui/capture/BottomNavigation.vue';
  import RefreshIcon from '@shared/ui/icon/RefreshIcon.vue';
  import SaveIcon from '@shared/ui/icon/SaveIcon.vue';
  import PhotoCardIcon from '@shared/ui/icon/PhotoCardIcon.vue';
  import ShareIcon from '@shared/ui/icon/ShareIcon.vue';
  import { CAPTURE_BACKGROUND_IMAGE } from '@/constant/IMAGE_URL';
  import { ref } from 'vue';
  import CaptureActionForm from '@/features/ui/capture/CaptureActionForm.vue';
  import Tutorial from '@/features/ui/capture/Tutorial.vue';

  const isCapture = ref(false);

  const handleRefresh = () => {
    console.log('다시 촬영 버튼 클릭됨');
  };

  const handleSave = () => {
    console.log('저장 버튼 클릭됨');
  };

  const handlePhotoCard = () => {
    console.log('포토카드 버튼 클릭됨');
  };

  const handleShare = () => {
    console.log('공유 버튼 클릭됨');
  };

  const ICONS = [
    { name: 'RefreshIcon', component: RefreshIcon, label: '다시 촬영', onClick: handleRefresh },
    { name: 'SaveIcon', component: SaveIcon, label: '저장', onClick: handleSave },
    { name: 'PhotoCardIcon', component: PhotoCardIcon, label: '포토카드', onClick: handlePhotoCard },
    { name: 'ShareIcon', component: ShareIcon, label: '공유', onClick: handleShare },
  ];

  const setCaptureComplate = () => {
    isCapture.value = true;
  };
</script>
<template>
  <Tutorial />
  <img :src="CAPTURE_BACKGROUND_IMAGE" alt="" />

  <BottomNavigation v-if="isCapture" :ICONS="ICONS" />
  <CaptureActionForm v-if="!isCapture" :setCaptureComplate="setCaptureComplate" />
</template>
<style scoped>
  img {
    width: 100%;
    height: calc(100 * var(--vh));
    z-index: -1;
    position: fixed;
  }
</style>
