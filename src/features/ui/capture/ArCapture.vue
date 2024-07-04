<script setup>
  import useExperience from '@/shared/hooks/useExperience';
  import { onMounted } from 'vue';
  const exp = useExperience();

  const bellCharacter = new URL('/public/resource/frame/frame_bell.png', import.meta.url).href;
  const test = () => {
    exp.setCharacter({ id: 0, src: bellCharacter, name: 'bell' });
  };
  onMounted(() => {});
</script>
<template>
  <div @click="test" class="webgl-container">
    <canvas class="webgl" />
  </div>
  <div class="frame">
    <img src="" alt="" />
  </div>
</template>
<style scoped>
  .webgl-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100 * var(--vh));
    z-index: -1;
  }
  .webgl {
    width: 100%;
    height: 100%;
  }
  .frame {
    width: 100%;
    height: calc(100 * var(--vh));
    position: fixed;
    z-index: -1;
  }
</style>
