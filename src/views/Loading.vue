<script setup>
  import Logo from '@shared/ui/icon/Logo.vue';
  import Progress from '@shared/ui/components/Progress.vue';
  import { onMounted, onUnmounted, ref } from 'vue';
  import router from '@/router';
  import { EVENT_LOADING_INFO_LIST } from '@/constant/TEXT_LIST';
  const timerRef = ref(null);
  const props = defineProps(['EVENT_INFO', 'redirectPoint']);

  const { redirectPoint, eventId } = history.state;
  const CONSTANT = EVENT_LOADING_INFO_LIST[eventId];

  onMounted(() => {
    timerRef.value = setTimeout(() => {
      router.push(redirectPoint);
    }, 3000);
  });

  onUnmounted(() => {
    clearTimeout(timerRef.value);
  });
</script>
<template>
  <main :class="CONSTANT.THEME">
    <Logo width="56px" height="56px" />
    <div class="title-container">
      <p class="white-md">{{ CONSTANT.ENG_TITLE }}</p>
      <p v-for="p in CONSTANT.KO_TITLE" class="white-lg">{{ p }}</p>
    </div>
    <div>
      <img :src="CONSTANT.IMAGE" alt="" />
    </div>
    <div class="content-container">
      <p class="white-md">{{ CONSTANT.CONTENT[0] }}</p>
      <p class="white-md-w">{{ CONSTANT.CONTENT[1] }}</p>
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
    color: white;
    line-height: 26px;
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
  .white-lg {
    font-size: var(--font-size-3xl);
    font-weight: 800;
  }
  .white-md-w {
    font-size: var(--font-size-md);
    font-weight: 800;
  }
  .white-md {
    font-size: var(--font-size-md);
    font-weight: 100;
  }
  .white-sm {
    font-size: var(--font-size-sm);
    font-weight: 100;
  }
</style>
