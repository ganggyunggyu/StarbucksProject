<script setup>
  import 'swiper/swiper-bundle.css';
  import { ref } from 'vue';
  import EventItem from '@/entities/ui/event/EventItem.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import Logo from '@/shared/ui/icon/Logo.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
  import { EVENT_LIST, TEMP_CARD } from '@/constant/TEXT_LIST';

  const backgroundRef = ref('bg-red');
  const currIndex = ref(0);
  const isTempCard = ref(true);

  const changeBackground = (value) => {
    backgroundRef.value = value;
  };

  const setBackground = (index) => {
    if (index === 0) return 'bg-red';
    if (index === 1) return 'bg-mint';
    if (index === 2) return 'bg-yellow-green';
  };

  const onSlideChange = (swiper) => {
    currIndex.value = swiper.realIndex;
    backgroundRef.value = setBackground(currIndex.value);
    if (currIndex.value !== 0) isTempCard.value = false;
  };
</script>

<template>
  <main :class="backgroundRef">
    <header>
      <Logo width="56px" height="56px" />
      <CloseIcon />
    </header>
    <swiper
      ref="swiperRef"
      :slidesPerView="'1.3'"
      :spaceBetween="0"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :centeredSlides="true"
      :modules="[Navigation, Pagination, Scrollbar, A11y]"
      :initialSlide="0"
      :slideActiveClass="'swiper-slide-center'"
      @slideChange="onSlideChange"
      class="scroll"
    >
      <swiper-slide v-for="(card, index) in EVENT_LIST" :key="index" class="swiper-slide-none">
        <EventItem :ref="backgroundRef" :theme="card.theme" :eventInfo="card" :changeBackground="changeBackground" />
      </swiper-slide>
    </swiper>
    <EventItem v-if="isTempCard" class="temp-card swiper-slide-none" :ref="backgroundRef" :theme="TEMP_CARD.theme" :eventInfo="TEMP_CARD" :changeBackground="changeBackground" />
  </main>
</template>

<style scoped>
  main {
    width: calc(100 * var(--vw));
    height: calc(100 * var(--vh));
  }
  .temp-card {
    position: fixed;
    right: -255px;
    top: calc(13 * var(--vh));
  }

  .swiper-slide {
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
  .bg-red {
    background-color: var(--bg-red);
  }
  .bg-yellow-green {
    background-color: var(--bg-yellow-green);
  }
  .bg-mint {
    background-color: var(--bg-mint);
  }
</style>
