const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        hover: {
          accent: 'var(--color-bg-accent-hover)',
        },
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        on: {
          accent: 'var(--color-text-on-accent)',
        },
        fill: {
          primary: 'var(--color-fill-primary)',
          secondary: 'var(--color-fill-secondary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
