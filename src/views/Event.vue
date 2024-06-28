<script setup>
  import { ref } from 'vue';
  import EventItem from '@/entities/ui/event/EventItem.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import Logo from '@/shared/ui/icon/Logo.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';
  const modules = [Pagination, Navigation];

  const cardList = ref([
    { index: 0, theme: 'red' },
    { index: 1, theme: 'mint' },
    { index: 2, theme: 'yellow-green' },
  ]);
</script>

<template>
  <main class="bg-yellow-green">
    <header>
      <Logo width="56px" height="56px" />
      <CloseIcon />
    </header>
    <swiper
      :slidesPerView="'1.25'"
      :spaceBetween="0"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :centeredSlides="true"
      :modules="modules"
      :initialSlide="0"
      :slideActiveClass="'swiper-slide-center'"
      class="scroll"
    >
      <swiper-slide v-for="(card, index) in cardList" :key="index" class="swiper-slide-none">
        <EventItem :theme="card.theme" />
      </swiper-slide>
    </swiper>
  </main>
</template>

<style scoped>
  main {
    width: calc(100 * var(--vw));
    height: calc(100 * var(--vh));
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide-none {
    filter: brightness(50%);
    scale: 0.95;
  }
  .swiper-slide-center {
    filter: brightness(100%);
    scale: 1;
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
  .swiper {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    gap: 30px;
  }
  .group {
    display: flex;
    overflow-x: scroll;
    width: 100%;
    gap: 10px;
    scroll-snap-type: x mandatory;
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
