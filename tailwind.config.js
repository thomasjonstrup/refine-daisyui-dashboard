/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    light: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      primary: "#0d89ec",
    },
  },
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
