export const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', setVh);
};
export const setVw = () => {
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
  window.addEventListener('resize', setVw);
};
