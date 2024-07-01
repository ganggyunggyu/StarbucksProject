export const getTheme = (themeName) => {
  if (!themeName) return { buttonStyle: 'white-text-yellow-green lg', themeStyle: 'yellow-green-theme' };
  if (themeName === 'red') return { buttonStyle: 'white-text-red lg', themeStyle: 'red-theme' };
  if (themeName === 'mint') return { buttonStyle: 'white-text-mint lg', themeStyle: 'mint-theme' };
  if (themeName === 'yellow-green') return { buttonStyle: 'white-text-yellow-green lg', themeStyle: 'yellow-green-theme' };
};
