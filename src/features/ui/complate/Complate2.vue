<script setup>
  import Input from '@/shared/ui/components/Input.vue';
  import Button from '@/shared/ui/components/Button.vue';

  const props = defineProps(['updateStep']);
  const goToNextStep = () => {
    props.updateStep(2);
  };
</script>
<template>
  <main>
    <div>
      <p>키오스크 화면에 보이는</p>
      <p>기기번호를 입력해 주세요.</p>
      <Input placeholder="기기번호 입력" />
    </div>
    <Button @click="goToNextStep" lable="확인" class="red lg" />
  </main>
</template>
<style scoped>
  main {
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(100 * var(--vh));
    flex-direction: column;
  }
  main svg {
    top: 15px;
    right: 15px;
    position: absolute;
  }
  div {
    width: 60%;
    line-height: 26px;

    transform: translateY(calc(30 * var(--vh)));
  }
  button {
    position: absolute;
    bottom: 50px;
  }
</style>
