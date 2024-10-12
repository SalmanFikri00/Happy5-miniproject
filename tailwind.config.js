/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        list: "#1A0931",
        primaryText: "#2F3136",
        secondaryText: "#5D6372",
        offText: "#B7BDC9",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

