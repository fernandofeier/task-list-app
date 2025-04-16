import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // blue
        secondary: '#10b981', // green
        lightGray: '#f3f4f6',
        darkGray: '#374151',
      },
      spacing: {
        18: '4.5rem'
      }
    },
  },
  plugins: [],
};

export default config;
