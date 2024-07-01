<script setup>
  import Complate1 from '@/features/ui/complate/Complate1.vue';
  import Complate2 from '@/features/ui/complate/Complate2.vue';
  import Complate3 from '@/features/ui/complate/Complate3.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';

  import { ref } from 'vue';
  const stepRef = ref(0);

  const updateStep = (newStep) => {
    stepRef.value = newStep;
  };
</script>
<template>
  <CloseIcon />
  <Complate1 v-if="stepRef === 0" :updateStep="updateStep" />
  <Complate2 v-if="stepRef === 1" :updateStep="updateStep" />
  <Complate3 v-if="stepRef === 2" :updateStep="updateStep" />
</template>
<style scoped>
  div svg {
    position: absolute;
    top: 15px;
    right: 15px;
  }
</style>
