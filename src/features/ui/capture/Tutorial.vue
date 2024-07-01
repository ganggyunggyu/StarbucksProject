<script setup>
  import { PROFILE } from '@/constant/IMAGE_URL';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import { ref } from 'vue';
  const TUTORIAL_TEXT_LIST = ['카메라를 고정시키면', '벚꽃나무가 나타날 거야!'];
  const isTutorial = ref(true);
</script>
<template>
  <div v-if="isTutorial" @click="isTutorial = false" class="tutorial">
    <article>
      <CloseIcon />
      <div>
        <img :src="PROFILE" alt="" />
      </div>
      <div>
        <p v-for="p in TUTORIAL_TEXT_LIST">{{ p }}</p>
      </div>
    </article>
  </div>
</template>
<style scoped>
  .tutorial {
    width: 100%;
  }
  .tutorial article {
    width: 90%;
    height: calc(16 * var(--vh));
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 999;
    left: 50%;
    transform: translate(-50%, -15%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
  svg {
    position: absolute;
    top: 10px;
    right: 5px;
  }
  article img {
    width: 70px;
    height: 70px;
    background-color: var(--color-pink);
    border-radius: 50%;
  }
  p {
    line-height: 20px;
    font-size: var(--font-size-md);
  }
</style>
