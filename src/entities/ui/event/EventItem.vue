<script setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import router from '@/router';
  import { EVENT_MAIN, PROFILE } from '@/constant/IMAGE_URL';
  import { getTheme } from '@/shared/lib/getTheme';
  import MegaPhoneIcon from '@/shared/ui/icon/MegaPhoneIcon.vue';
  import Button from '@shared/ui/components/Button.vue';
  import useTyping from '@/entities/hooks/useTyping';
  const props = defineProps(['theme', 'eventInfo', 'changeBackground']);

  const themeRef = ref(null);

  const handleStart = () => {
    router.push({ name: 'Loading', state: { redirectPoint: 'capture', eventId: props.eventInfo.id } });
  };

  const { TEXT_LIST, CONTENT_LIST, PERIOD } = props.eventInfo;
  themeRef.value = getTheme(props.theme);
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
        <p v-for="p in CONTENT_LIST">{{ p }}</p>
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
    height: calc(79 * var(--vh));
    border-radius: 20px;
  }
  .header {
    width: 100%;
    height: 106px;
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

    gap: 15px;
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
    width: 100%;
  }
  .period {
    font-size: var(--font-size-xs);
  }
</style>
