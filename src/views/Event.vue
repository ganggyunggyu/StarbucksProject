<script setup>
  import EventItem from '@/entities/ui/event/EventItem.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import Logo from '@/shared/ui/icon/Logo.vue';
  import { ref } from 'vue';

  const bgRef = ref(null);
  const selectCardRef = ref(1);

  const CARD_LIST = [
    { index: 0, theme: 'red' },
    { index: 1, theme: 'mint' },
    { index: 2, theme: 'yellow-green' },
  ];
</script>
<template>
  <main class="bg-yellow-green">
    <header>
      <Logo width="56px" height="56px" />
      <CloseIcon />
    </header>
    <section>
      <EventItem v-for="card in CARD_LIST" :theme="card.theme" :class="selectCardRef === card.index && 'sacle'" />
    </section>
    <div class="indicators">
      <span v-for="(dot, index) in CARD_LIST" :key="index" :class="{ active: currentSlide === index }" class="dot" @click="goToSlide(index)"></span>
    </div>
  </main>
</template>
<style scoped>
  main {
    width: calc(100 * var(--vw));
    height: calc(100 * var(--vh));
  }
  header {
    height: calc(13 * var(--vh));
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  header svg {
    position: absolute;
    right: 10px;
  }
  section {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    gap: 10px;
  }
  .bg-red {
    background-color: var(--bg-red);
  }
  .bg-yellow-green {
    background-color: var(--bg-yellow-green);
  }
  .bg-mint {
    background-color: var(--bg-mint);
  }
  .indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 8px;
    height: 8px;
    background-color: var(--color-gray);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: white;
  }
</style>
