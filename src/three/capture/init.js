import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

let camera, scene, renderer;
let video, videoTexture, videoMaterial;
let mouse;
let scale;
let model;
let items = [];
let x, y;

const source = {
  name: 'bellModel',
  type: 'gltfModel',
  path: '/public/Bell_new.gltf',
};
const getResources = async () => {
  const loader = new GLTFLoader();
  try {
    await loader.load(source.path, (gltf) => {
      items.push(gltf);
      setModel();
    });
  } catch (error) {
    console.error('An error happened while loading the model:', error);
  }
};

const setLight = () => {
  const ambientLight = new THREE.AmbientLight('#ffffff', 1.7);

  const sunLight = new THREE.DirectionalLight('#ffffff', 1.4);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 15;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(0.5, 0, 0.866);

  scene.add(sunLight);
  scene.add(ambientLight);
};

const setModel = () => {
  const resource = items[0];
  model = SkeletonUtils.clone(resource.scene);
  const mixer = new THREE.AnimationMixer(model);

  resource.animations.forEach((clip) => {
    console.log(clip);
    const action = mixer.clipAction(clip);
    action.play();
  });

  model.scale.set(1.5, 1, 1.5);
  model.position.set(3, 3, 3);
  model.rotation.set(0, 0, 0);

  model.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.name = 'model';
      child.material.depthWrite = !child.material.transparent;
    }
  });
  scene.add(model);
};

export const setPosition = () => {
  mouse = new THREE.Vector2();
  console.log(mouse);
  init();
  animate();
  getResources();
};

export function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2.3, 8);

  scene.add(camera);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.className = 'webgl';
  const prevCanvas = document.querySelector('.webgl');

  if (prevCanvas) prevCanvas.remove();

  document.body.appendChild(renderer.domElement);

  video = document.createElement('video');
  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  const getCameraStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.play();
      return stream;
    } catch (err) {
      console.error('Error accessing webcam:', err);
      return null;
    }
  };

  videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.NearestFilter;
  videoTexture.magFilter = THREE.NearestFilter;
  videoTexture.format = THREE.RGBAFormat;
  videoTexture.colorSpace = THREE.SRGBColorSpace;
  videoTexture.wrapS = THREE.RepeatWrapping;
  videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.matrix.scale(-1, 1);

  videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });

  scene.background = videoTexture;

  window.addEventListener('resize', onWindowResize, false);
  window.addEventListener('touchstart', (event) => {
    const canvas = document.querySelector('.webgl');
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    mouse.x = (x / canvas.clientWidth) * 2 - 1;
    mouse.y = -(y / canvas.clientHeight) * 2 + 1;

    const vector = new THREE.Vector3(mouse.x, mouse.y, 1).unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));

    if (model) {
      console.log(pos);
      console.log(mouse);
      model.position.copy(pos);
      model.rotation.set(0, 0, 0);
    }
  });
  const getStream = async () => {
    try {
      const result = await getCameraStream();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  getStream();
  setLight();
}

export function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
