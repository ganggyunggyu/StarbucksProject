<script setup>
  import { CODE_MODAL_TEXT_LIST } from '@/constant/TEXT_LIST';
  import router from '@/router';
  import Input from '@/shared/ui/components/Input.vue';
  import Button from '@shared/ui/components/Button.vue';
  const props = defineProps(['isModal']);
  const emits = defineEmits(['close']);

  const closeModal = () => {
    emits('close');
  };
  const handleSubmit = () => {
    router.push('event');
  };
</script>
<template>
  <div class="container">
    <div class="header">
      <p>입장 코드 입력</p>
    </div>
    <div class="body">
      <div class="text-container">
        <p v-for="p in CODE_MODAL_TEXT_LIST">{{ p }}</p>
      </div>
      <Input lable="입장코드" type="password" />
      <div class="button-container">
        <Button lable="취소" class="gray-text-white sm" @click="closeModal" />
        <Button lable="확인" class="red sm" @click="handleSubmit" />
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
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header {
    width: 100%;
    height: 50px;
    border-radius: 20px 20px 0 0;
    background-color: var(--color-red);
  }
  .header p {
    color: white;
    font-size: var(--font-size-md);
    transform: translate(15px, 15px);
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: start;
    transform: translate(15px, 30px);
    gap: 20px;
  }
  .button-container {
    display: flex;
    gap: 20px;
  }
  .text-container {
    line-height: 20px;
  }
</style>
