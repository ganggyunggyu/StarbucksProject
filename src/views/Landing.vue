<script setup>
  import { ref } from 'vue';

  import Logo from '@shared/ui/icon/Logo.vue';
  import Button from '@/shared/ui/components/Button.vue';
  import CodeModal from '@/entities/ui/modal/CodeModal.vue';

  import { BACKGROUND_IMAGE } from '@/constant/IMAGE_URL';
  import { LANDING_TEXT_LIST } from '@/constant/TEXT_LIST';
  import router from '@/router';

  const isModal = ref(false);

  const closeModal = () => {
    isModal.value = false;
  };
  const openModal = () => {
    isModal.value = true;
  };
  const redirectPrizePage = () => {
    router.push('prize');
  };
</script>

<template>
  <main>
    <div class="background" :class="isModal && 'on-modal'" @click="isModal = false">
      <img :src="BACKGROUND_IMAGE" alt="렌딩 배경 이미지" />
    </div>
    <Logo width="184px" height="184px" :class="isModal && 'on-modal'" />
    <section class="text-container" :class="isModal && 'on-modal'">
      <p v-for="(p, i) in LANDING_TEXT_LIST" :class="i === 1 && 'f-w'">
        {{ p }}
      </p>
    </section>
    <section class="button-container">
      <Button lable="바로 시작하기" class="red lg" @click="openModal" />
      <Button lable="당첨 내역 확인" class="white-text-red lg" @click="redirectPrizePage" />
    </section>
    <Transition name="opacity-modal">
      <CodeModal v-if="isModal" @close="closeModal" />
    </Transition>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100 * var(--vh));
  }
  .background {
    height: calc(100 * var(--vh));
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .background img {
    width: 100%;
    height: 100%;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-red);
    margin-top: calc((5 * var(--vh)));
    font-size: var(--font-size-3xl);
    line-height: 34px;
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    transform: translate(0, calc(5 * var(--vh)));
  }
  .f-w {
    font-weight: 800;
  }
  .on-modal {
    filter: brightness(60%);
    z-index: 1;
  }
</style>
