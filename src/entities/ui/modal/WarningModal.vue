<script setup>
  import Button from '@shared/ui/components/Button.vue';
  import Warring from '@shared/ui/icon/WarringIcon.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import router from '@/router';

  const props = defineProps(['closeModal', 'refreshCapture']);

  const redirectEvent = () => {
    router.push('event');
  };
</script>
<template>
  <div class="container">
    <div class="header">
      <CloseIcon @click="closeModal" />
    </div>
    <div class="body">
      <div>
        <Warring />
      </div>
      <div class="text-container">
        <p>잠깐만요!</p>
        <p>사진, 영상 촬영 후 저장 및 공유를 하셨나요?</p>
        <p>저장 및 공유는 촬영 후 사진, 영상 공유 화면에서 가능합니다.</p>
      </div>
      <div class="button-container">
        <Button @click="refreshCapture" lable="처음부터 다시 시작" class="white-text-red lg" />
        <Button @click="redirectEvent" lable="페이지 나가기" class="red lg" />
      </div>
    </div>
  </div>
</template>
<style scoped>
  .container {
    width: 270px;
    height: 310px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  .text-container {
    font-size: var(--font-size-md);
    line-height: 22px;
  }
  .header svg {
    color: white;
    font-size: var(--font-size-sm);
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 5px;
    padding: 13px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transform: translateY(15px);
  }
</style>
