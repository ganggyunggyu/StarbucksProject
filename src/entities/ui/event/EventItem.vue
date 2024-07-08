<script setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import router from '@/router';
  import { EVENT_MAIN, PROFILE } from '@/constant/IMAGE_URL';
  import { getTheme } from '@/shared/lib/getTheme';
  import MegaPhoneIcon from '@/shared/ui/icon/MegaPhoneIcon.vue';
  import Button from '@shared/ui/components/Button.vue';
  import useTyping from '@/entities/hooks/useTyping';
  import { useEventStore } from '@/stores/eventStore';

  const eventStore = useEventStore();
  const props = defineProps(['theme', 'eventInfo', 'changeBackground']);

  const themeRef = ref(null);

  const handleStart = () => {
    router.push({ name: 'Capture' });
  };

  const { TEXT_LIST, CONTENT_LIST, PERIOD } = props.eventInfo;
  themeRef.value = getTheme(props.theme);
  console.log(props.eventInfo, eventStore);
  const { textRef } = useTyping(TEXT_LIST.join('\n'));
</script>

<template>
  <article class="event-item-container" :class="themeRef.themeStyle">
    <div class="header">
      <div class="header-image-container">
        <img :src="PROFILE" alt="베어리스타" :class="themeRef.themeStyle" />
      </div>
      <div class="text-container">
        <p v-html="textRef"></p>
      </div>
      <MegaPhoneIcon />
    </div>
    <div class="body">
      <div class="content-container">
        <p v-for="(p, index) in CONTENT_LIST" :key="index">{{ p }}</p>
        <span class="period">{{ PERIOD }}</span>
      </div>

      <div class="body-image-container">
        <div></div>
        <img :src="EVENT_MAIN" alt="이벤트 이미지" />
      </div>
      <Button @click="handleStart" style="width: 100%" lable="시작하기" :class="themeRef.buttonStyle" />
    </div>
  </article>
</template>

<style scoped>
  .mint-theme {
    background-color: var(--color-mint);
  }
  .yellow-green-theme {
    background-color: var(--color-yellow-green);
  }
  .red-theme {
    background-color: var(--color-red);
  }
  .event-item-container {
    width: 300px;
    height: 560px;
    border-radius: 20px;
  }
  .header {
    width: 100%;
    height: calc(15 * var(--vh));
    background-color: white;
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 15px;
    font-size: var(--font-size-sm);
    line-height: 20px;
    border-radius: 20px 20px 0 0;
    position: relative;
  }
  .header svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .body {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(560px - (15 * var(--vh)));
    padding: 20px;
  }
  .body-image-container {
    width: 100%;
    height: 230px;
    position: relative;
  }
  .body-image-container img {
    z-index: -1;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .body-image-container div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
  .header-image-container {
    width: 50px;
    height: 50px;
  }
  .header-image-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .content-container p {
    font-size: var(--font-size-3xl);
    line-height: 25px;
    width: 100%;
  }
  .period {
    font-size: var(--font-size-xs);
  }
</style>
