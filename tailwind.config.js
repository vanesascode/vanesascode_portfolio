/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  "darkMode": "class",
  mode: "jit",
  theme: {

    extend: {
      colors: {
        primary: "#11101d",
        secondary: "#bab6e4",
        accent: "#fff",

      },
      fontFamily: {

        exo: ["Exo", "sans-serif"],
        source: ["Source Code Pro", "sans-serif"],
      },
    },
    screens: {
      'xxxxs': '200px',
      'xxxs': '300px',
      'xxs': '350px', //mobile phones in portrait mode.'
      'xs': '375px', //small mobile devices such as smartphones in portrait mode.
      '1xs': '425px',
      '2xs': '550px',
      'sm': '640px', //mobile devices such as smartphones in portrait mode.
      'md': '768px', //larger smartphones or smaller tablets in portrait mode.
      '1md': '800px',
      '2md': '880px',
      '3md': '980px',
      'lg': '1024px', //tablets in landscape mode, small laptops, and larger smartphones in landscape mode.
      '2lg': '1150px',
      'xl': '1280px', //larger laptops and desktop monitors.
      '1xl': '1460px', // big desktop monitors.
      '2xl': '1736px', //high-resolution displays on larger desktop monitors or high-end laptops.
    },
  },
  plugins: [],
}
