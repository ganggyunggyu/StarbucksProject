const useLoading = () => {
  const isLoading = ref(true);
  const timer = ref(null);

  onMounted(() => {
    timer.value = setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  });

  onUnmounted(() => {
    clearTimeout(timer);
  });

  return { isLoading };
};

export default useLoading;
