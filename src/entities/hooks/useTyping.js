import { ref, onMounted, onUnmounted, watch } from 'vue';

const useTyping = (string) => {
  const intervalRef = ref(null);
  const textRef = ref('');

  watch(
    () => string,
    (newText) => {
      startTyping(newText);
    },
  );

  const startTyping = (text) => {
    clearInterval(intervalRef);
    textRef.value = '';
    let index = 0;

    intervalRef.value = setInterval(() => {
      if (index < text.length) {
        textRef.value += text[index];
        index++;
        if (text[index - 1] === '\n') {
          textRef.value += '<br>';
        }
      } else {
        clearInterval(intervalRef);
      }
    }, 100);
  };

  onMounted(() => {
    startTyping(string);
  });

  onUnmounted(() => {
    clearInterval(intervalRef.value);
  });

  return { textRef };
};

export default useTyping;
