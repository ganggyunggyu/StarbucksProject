<script setup>
  import Progress from '@/shared/ui/components/Progress.vue';
  const text = ['전송중'];

  const props = defineProps(['updateStep']);
  const goToNextStep = () => {
    props.updateStep(1);
  };
</script>
<template>
  <main>
    <p>사진 출력이 요쳥되었습니다.</p>
    <Progress :text-list="text" color="red" />
  </main>
</template>
<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100 * var(--vh));
  }
  main svg {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  div progress::-webkit-progress-value {
    background: var(--color-red);
  }
  p {
    transform: translateY(-30px);
  }
</style>
