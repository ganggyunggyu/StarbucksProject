<script setup>
  import Button from '@shared/ui/components/Button.vue';
  import HashTag from '@/shared/ui/components/HashTag.vue';
  import CopyIcon from '@/shared/ui/icon/CopyIcon.vue';

  const TAG_LIST = ['#블루밍모먼트', '#베어리스타', '#스타벅스AR'];
</script>
<template>
  <div class="container">
    <div class="header">
      <p>SNS 공유</p>
    </div>
    <div class="body">
      <div class="text-container">
        <p>인스타그램에 아래 해시태그와 함께</p>
        <p>배리어스타를 공유해 보세요!</p>
      </div>
      <div class="hash-tag-comtainer">
        <HashTag v-for="tag in TAG_LIST" :lable="tag" />
      </div>
      <div class="copy-container">
        <CopyIcon />
        <p class="copy-text">복사하기</p>
      </div>
      <Button lable="공유하기" class="red lg" />
    </div>
  </div>
</template>
<style scoped>
  .container {
    width: 270px;
    height: 310px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .header {
    width: 100%;
    height: 50px;
    border-radius: 20px 20px 0 0;
    background-color: var(--color-red);
  }
  .header p {
    color: white;
    font-size: var(--font-size-md);
    transform: translate(15px, 15px);
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: start;
    transform: translate(15px, 30px);
    gap: 10px;
  }
  .button-container {
    display: flex;
    gap: 20px;
  }
  .hash-tag-comtainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }
  .copy-container {
    display: flex;
    gap: 1px;
    margin-bottom: 10px;
  }
  .copy-text {
    font-size: var(--font-size-md);
    color: var(--color-red);
    border-bottom: 1px solid var(--color-red);
  }
</style>
