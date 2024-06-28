<script setup>
  import { EVENT_MAIN, PROFILE } from '@/constant/IMAGE_URL';
  import Button from '@shared/ui/components/Button.vue';
  import { onMounted, ref } from 'vue';
  import MegaPhoneIcon from '@/shared/ui/icon/MegaPhoneIcon.vue';
  const props = defineProps(['PROFILE_TEXT_LIST', 'CONTENT_TEXT_LIST', 'PEROPD_TEXT', 'PROFILE_IMAGE_URL', 'EVENT_IMAGE_URL', 'theme', 'ref']);
  const themeRef = ref(null);
  const getTheme = () => {
    if (!props.theme) return { buttonStyle: 'white-text-yellow-green lg', themeStyle: 'yellow-green-theme' };
    if (props.theme === 'red') return { buttonStyle: 'white-text-red lg', themeStyle: 'red-theme' };
    if (props.theme === 'mint') return { buttonStyle: 'white-text-mint lg', themeStyle: 'mint-theme' };
    if (props.theme === 'yellow-green') return { buttonStyle: 'white-text-yellow-green lg', themeStyle: 'yellow-green-theme' };
  };

  const TEXT_LIST = ['베어리스타와 함께 춤을!', '베어리스타 댄스를 함께 추고', '챌린지에도 참여해 봐! ♬'];
  const CONTENT_LIST = ['베어리스타', '댄스 챌린지'];
  const PERIOD = '기간 : 3/14(목) ~ 4/10(수)';

  themeRef.value = getTheme();
</script>

<template>
  <article ref="ref" :class="themeRef.themeStyle">
    <div class="header">
      <div class="header-image-container">
        <img :src="PROFILE" alt="베어리스타" :class="themeRef.themeStyle" />
      </div>
      <div class="text-container">
        <p v-for="p in TEXT_LIST">{{ p }}</p>
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
      <Button style="width: 100%" lable="시작하기" :class="themeRef.buttonStyle" />
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
  article {
    width: 300px;
    height: 530px;
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
