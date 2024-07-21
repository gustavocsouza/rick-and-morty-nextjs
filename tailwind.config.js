/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': {
          '50': '#E6E6E6',
          '100': '#B0B0B0',
          '200': '#8A8A8A',
          '300': '#545454',
          '400': '#333333',
          '500': '#000000',
        },
        'custom-white': {
          '500': '#FFFFFF',
          '600': '#E8E8E8',
          '700': '#B5B5B5',
          '800': '#8C8C8C',
          '900': '#6B6B6B',
        },
        'secondary': {
          '50': '#ECF8FA',
          '100': '#C4E8EF',
          '200': '#A8DDE7',
          '300': '#80CDDB',
          '400': '#68C3D5',
          '500': '#42B4CA',
          '600': '#3CA4B8',
          '700': '#2F808F',
          '800': '#24636F',
          '900': '#1C4C55',
        },
        'neutral': {
          '50': '#E8EBEC',
          '100': '#B8C1C4',
          '200': '#95A3A7',
          '300': '#657A7F',
          '400': '#476066',
          '500': '#193840',
          '600': '#17333A',
          '700': '#12282D',
          '800': '#0E1F23',
          '900': '#0B181B',
        },
        'primary': {
          '50': '#F9FCEC',
          '100': '#EBF5C4',
          '200': '#E2F0A8',
          '300': '#D4E980',
          '400': '#CCE568',
          '500': '#BFDE42',
          '600': '#AECA3C',
          '700': '#889E2F',
          '800': '#697A24',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
