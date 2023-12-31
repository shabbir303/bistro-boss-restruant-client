/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
     fontFamily:{
      cinzel:['Cinzel', "serif"],
      inter: ['Inter', "sans-serif"]
    }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: 
  [
    require("daisyui"), 
  require("flowbite/plugin")],
};
