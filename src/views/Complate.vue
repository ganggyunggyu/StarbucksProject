<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  import Complate1 from '@/features/ui/complate/Complate1.vue';
  import Complate2 from '@/features/ui/complate/Complate2.vue';
  import Complate3 from '@/features/ui/complate/Complate3.vue';
  import CloseIcon from '@/shared/ui/icon/CloseIcon.vue';
  import { onBeforeRouteLeave } from 'vue-router';
  import WarningModal2 from '@/entities/ui/modal/WarningModal2.vue';

  const stepRef = ref(0);
  const isWarningModal = ref(false);
  const toggleModal = () => {
    isWarningModal.value = !isWarningModal.value;
  };
  const updateStep = (newStep) => {
    stepRef.value = newStep;
  };

  onBeforeRouteLeave((to, from) => {
    console.log('onBeforeRouteLeave App');
    console.log(to, from);
    isWarningModal.value = true;
    if (to.name === 'Complate') {
      return true;
    } else {
      return false;
    }
  });
</script>

<template>
  <transition name="opacity">
    <WarningModal2 v-if="isWarningModal" :closeModal="toggleModal" />
  </transition>
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
