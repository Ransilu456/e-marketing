/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pristina: ["Pristina", "cursive"],
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to right, #1C3ED2, #978BF2)",
      },
      colors: {
        dark: "#06091A",
        "results-bg": "#00238B",
        "results-border": "#FBFBFB",
        "results-text": "rgba(140, 140, 140, 0.12)",
      },
    },
  },
};
