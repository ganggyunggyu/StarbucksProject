<script setup>
  import { POHTO_CARD_1, POHTO_CARD_2 } from '@/constant/IMAGE_URL';
  import router from '@/router';
  import Button from '@/shared/ui/components/Button.vue';

  const props = defineProps(['updateStep']);
  const goToNextStep = () => {
    props.updateStep(1);
  };
  const prev = () => {
    router.replace('capture');
  };
</script>
<template>
  <main>
    <section class="text-container">
      <p class="f-w">나만의</p>
      <p class="f-w">스타벅스</p>
      <p>블루밍</p>
      <p><span class="f-w">포토카드</span> 만들기</p>
    </section>
    <section class="photo-container">
      <transition-group name="opacity">
        <div>
          <span class="photo-text">앞면 인쇄</span>
          <img class="image-box" :src="POHTO_CARD_1" alt="" />
        </div>
        <div>
          <span class="photo-text">뒷면 인쇄</span>
          <img class="image-box" :src="POHTO_CARD_2" alt="" />
        </div>
      </transition-group>
    </section>
    <section class="button-container">
      <Button @click="prev" lable="다시 촬영" class="gray-text-dark-gray lg" />
      <Button @click="goToNextStep" lable="출력하기" class="red lg" />
    </section>
    <footer><p>*포토카드는 스타벅스 OO점, OO점에서만 출력가능합니다</p></footer>
  </main>
</template>
<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: calc(3 * var(--vh));
    transform: translateY(calc(5 * var(--vh)));
  }
  main svg {
    position: absolute;
    right: 15px;
    top: -15px;
  }
  .photo-container {
    display: flex;
    gap: 20px;
  }
  .photo-text {
    color: var(--color-gray);
    font-size: var(--font-size-sm);
  }
  .image-box {
    height: calc(27 * var(--vh));
    width: auto;
  }
  .text-container {
    font-size: 28px;
    color: var(--color-red);
    display: flex;
    flex-direction: column;
    width: 80%;
    line-height: 32px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: calc(12 * var(--vh));
  }
  footer {
    transform: translateY(calc(3 * var(--vh)));
    font-size: var(--font-size-sm);
    color: var(--color-gray);
  }
</style>
