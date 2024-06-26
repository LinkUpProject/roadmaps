/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}',"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'sun':'#ec4899',
        'bg-dark': '#222222',
        'dark-pink':'#ec4899',
        'dark-white':'#e1e1e1',
      },
      fontFamily: {
        'lxgw-bright-gb': ['LXGW Bright GB', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
  daisyui: {
    themes: ["light", "dark"],
  },
}

