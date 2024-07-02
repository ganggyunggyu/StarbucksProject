import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      colors: {
        red: '#d95151',
        mint: '#9fbaaa',
        yellowGreen: '#d8da6d',
        pink: '#f5e9e9',
        lightGreen: '#e6f0ea',
        lightYellow: '#f4f5d2',
        green: '#005f40',
        lightGray: '#d9d9d9',
        darkGray: '#575757',
        gray: '#999999',
        black: '#3c3c3c',
      },
      backgrounds: {
        red: '#f5e9e9',
        yellowGreen: '#f4f5d2',
        mint: '#e6f0ea',
      },
      fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '28px',
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
