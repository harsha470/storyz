/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ab87ff, #3ce9a4)",
      },
    },
  },
  plugins: [],
};
