export const breakpoints = {
    tablet: '48rem', // 768px
    desktop: '62rem', // 992px
    widescreen: '75rem', // 1200px
  };
  
  const brand1 = '#4c48f5';
  const brand2 = '#ff5252';
  
  export default {
    space: [
      '0', // key: 0
      '1rem', // key: 1
      '2rem', // key: 2
      '3rem', // key: 3
      '4rem', // key: 4
      '5rem', // key: 5
      '7rem', // key: 6
      '0.5rem', // key: 7
    ],
    breakpoints: Object.keys(breakpoints).map((e) => breakpoints[e]),
    colors: {
      brand1: brand1,
      brand2: brand2,
      accent: '#42f23f',
      accent1: '#9d4d97',
      inactive: '#d5d5de',
      text: {
        info: '#a4b3b7',
        label: '#5e5d9c',
        dark: '#494949',
      },
      brandBase: {
        default: '#f1f4f6',
        hover: '#fff',
        active: 'rgba(255, 255, 255, 0.7)',
      },
      brand1States: {
        default: '#6c68ff',
        hover: brand1,
        active: '#3d3ad0',
      },
      brand2States: {
        default: '#fd6767',
        hover: brand2,
        active: '#c82d2d',
      },
      background: {
        dark: '#1a1f38',
        medium: '#4c38f5',
        light: '#f6f8fa',
      },
    },
    fonts: {
      family: {
        primary: '"Barlow", sans-serif',
        secondary: '"Open Sans", sans-serif',
      },
    },
  };