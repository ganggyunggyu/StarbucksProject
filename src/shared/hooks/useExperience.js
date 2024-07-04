import Experience from '@/ar/capture/Experience';
import router from '@/router/index';
import { useImageDataStore } from '@/stores/imageData';
import { ref, onMounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const useExperience = () => {
  let experience;

  const setFrameSrc = ref(null);
  const selectedCharacter = ref(false);
  const selectedSticker = ref(false);
  const isLoading = ref(true);
  const playAudio = () => {
    console.debug('audio');
  };

  const saveImage = (image) => {
    const imageDataStore = useImageDataStore();
    imageDataStore.setImageData(image);
    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = document.querySelector('.webgl');
    const width = canvas.style.width;
    const height = canvas.style.height;
    imageDataStore.setCanvasSize(width, height);

    router.push({ path: '/complate' });
  };
  const setCharacter = (image) => {
    if (experience) {
      experience.world.removeSticker();
      experience.world.setCharacter(image.id);
    }
    selectedSticker.value = null;
    selectedCharacter.value = image.id;
  };

  const setFrame = (image) => {
    setFrameSrc.value = image.src;
  };

  const setSticker = (image) => {
    playAudio();
    experience.world.setSticker(image.name);
    experience.world.removeCharacter();
    selectedSticker.value = image.id;
    selectedCharacter.value = false;
  };
  const refresh = () => {
    console.log(experience);
  };

  onMounted(() => {
    console.log('Experience Mount!');
    // const div = document.createElement('div');
    // const canvas = document.createElement('canvas');
    // div.className = 'webgl-container';
    // canvas.className = 'webgl';
    // document.body.appendChild(canvas);

    experience = new Experience(document.querySelector('.webgl'), saveImage);
    const resources = experience.resources;

    resources.on('ready', () => {
      isLoading.value = false;
    });
  });

  onBeforeRouteLeave(() => {
    experience.destroy();
    experience.dispose();
    experience.init();
  });

  return {
    experience,
    setCharacter,
    setSticker,
    setFrame,
    saveImage,
    experience,
    isLoading,
    refresh,
  };
};

export default useExperience;
