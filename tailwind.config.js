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
      'sm': '640px', //small mobile devices such as smartphones in portrait mode.
      'md': '768px', //larger smartphones or smaller tablets in portrait mode.
      'lg': '1024px', //tablets in landscape mode, small laptops, and larger smartphones in landscape mode.
      'xl': '1280px', //larger laptops and desktop monitors.
      '2xl': '1536px', //high-resolution displays on larger desktop monitors or high-end laptops.
    },
  },
  plugins: [],
}
