<script setup>
  import { PROFILE } from '@/constant/IMAGE_URL';
  import CloseIcon from '../icon/CloseIcon.vue';
  const props = defineProps(['TEXT_LIST']);

  //   const TEXT_LIST = ['카메라로 바닥이나 테이블을 비추면', '춤추는 베어리스타가 등장할 거야!', '챌린지도 함께 찍어보는 건 어때~?!'];
</script>
<template>
  <article>
    <CloseIcon />
    <div class="image-container">
      <img :src="PROFILE" alt="" />
    </div>
    <div>
      <p v-for="p in TEXT_LIST">{{ p }}</p>
    </div>
  </article>
</template>
<style scoped>
  article {
    width: 85%;
    height: calc(16 * var(--vh));
    background-color: white;
    border-radius: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
  }
  .image-container {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--color-pink);
  }
  article div {
    transform: translate(10px, 0);
  }
  article svg {
    position: absolute;
    right: 5px;
    top: 5px;
    color: var(--color-gray);
  }
  div img {
    width: 100%;
    height: 100%;
  }
  div p {
    font-size: var(--font-size-md);
    line-height: 20px;
  }
</style>
