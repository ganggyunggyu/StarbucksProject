<script setup>
  import Logo from '@shared/ui/icon/Logo.vue';
  import Progress from '@shared/ui/components/Progress.vue';

  const IMAGE = new URL('../static/resource/latte.png', import.meta.url).href;

  const CONSTANT = {
    THEME: 'bg-mint',
    ENG_TITLE: 'MEET THE BLOOMING MOMENT',
    KO_TITLE: '베어리스타와 함께 만나는 블루밍 모먼트',
    IMAGE: IMAGE,
    CONTENT: ['벚꽃이 피는 계절엔', '슈크림 라뗴와 함께!'],
  };
</script>
<template>
  <main :class="CONSTANT.THEME">
    <Logo width="56px" height="56px" />
    <div class="title-container">
      <p>{{ CONSTANT.ENG_TITLE }}</p>
      <p>{{ CONSTANT.KO_TITLE }}</p>
    </div>
    <div>
      <img :src="CONSTANT.IMAGE" alt="" />
    </div>
    <div class="content-container">
      <p>{{ CONSTANT.CONTENT[0] }}</p>
      <p>{{ CONSTANT.CONTENT[1] }}</p>
    </div>
    <Progress :text-list="['베어리스타를 부르는 중입니다...']" />
  </main>
</template>
<style scoped>
  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 26px;
  }

  .content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 26px;
    margin-bottom: calc(5 * var(--vh));
  }
  main {
    width: 100%;
    height: calc(100 * var(--vh));
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding-top: calc(5 * var(--vh));
  }
  .bg-yellow-green {
    background-color: var(--color-yellow-green);
  }
  .bg-red {
    background-color: var(--color-red);
  }
  .bg-mint {
    background-color: var(--color-mint);
  }
</style>
