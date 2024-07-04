<script setup>
import Logo from '@shared/ui/icon/Logo.vue';
import Progress from '@shared/ui/components/Progress.vue';
import { EVENT_LOADING_INFO_LIST } from '@/constant/TEXT_LIST';
const props = defineProps(['EVENT_INFO', 'redirectPoint', 'eventId']);
const CONSTANT = EVENT_LOADING_INFO_LIST[props.eventId];
</script>
<template>
  <main :class="CONSTANT.THEME">
    <Logo width="56px" height="56px" />
    <div class="title-container">
      <p class="white-md">{{ CONSTANT.ENG_TITLE }}</p>
      <p v-for="(p, index) in CONSTANT.KO_TITLE" :key="index" class="white-lg">{{ p }}</p>
    </div>
    <div>
      <img style="min-width: 90px; min-height: 180px" :src="CONSTANT.IMAGE" alt="" />
    </div>
    <div class="content-container">
      <p class="white-md">{{ CONSTANT.CONTENT[0] }}</p>
      <p class="white-md-w">{{ CONSTANT.CONTENT[1] }}</p>
    </div>
    <Progress :text-list="['베어리스타를 부르는 중입니다...']" />
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: calc(100 * var(--vh));
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: calc(5 * var(--vh));
  color: white;
  line-height: 26px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
}
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 26px;
  margin-bottom: calc(5 * var(--vh));
}
.bg-yellow-green {
  background-color: var(--color-yellow-green);
}
.bg-red {
  background-color: var(--color-red);
}
.bg-mint {
  background-color: var(--color-mint);
}
.white-lg {
  font-size: var(--font-size-3xl);
  font-weight: 800;
}
.white-md-w {
  font-size: var(--font-size-md);
  font-weight: 800;
}
.white-md {
  font-size: var(--font-size-md);
  font-weight: 100;
}
.white-sm {
  font-size: var(--font-size-sm);
  font-weight: 100;
}
</style>
