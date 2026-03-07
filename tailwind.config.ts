import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['animate-ping', 'animate-pulse', 'animate-spin'],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#fdf8f3',
          100: '#f5ede0',
          200: '#ede0cc',
          300: '#dfc9ae',
          400: '#d4b896',
          DEFAULT: '#c9a882',
        },
        burgundy: {
          50: '#fdf0f3',
          100: '#fad5de',
          300: '#e8789a',
          500: '#8B1538',
          600: '#6d1030',
          700: '#4f0a22',
          DEFAULT: '#8B1538',
        },
        rose: {
          blush: '#f2c4ce',
          soft: '#f7dde3',
          deep: '#d4607a',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
      },

      animation: {
        carousel: 'carousel 25s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-33.333%))' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
