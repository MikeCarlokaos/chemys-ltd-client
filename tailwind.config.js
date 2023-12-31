/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      square: "square",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E3094",
          50: "#9A9BE0",
          100: "#8A8CDB",
          200: "#6B6DD1",
          300: "#4C4FC7",
          400: "#383AB3",
          500: "#2E3094",
          600: "#212269",
          700: "#13143E",
          800: "#060614",
          900: "#000000",
          950: "#000000",
        },
        secondary: {
          DEFAULT: "#00A650",
          50: "#5FFFAC",
          100: "#4AFFA1",
          200: "#21FF8C",
          300: "#00F877",
          400: "#00CF64",
          500: "#00A650",
          600: "#006E35",
          700: "#00361A",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        tertiary: {
          DEFAULT: "#ED1B24",
          50: "#FAC5C7",
          100: "#F9B2B5",
          200: "#F68C91",
          300: "#F3676D",
          400: "#F04148",
          500: "#ED1B24",
          600: "#C10F17",
          700: "#8D0B11",
          800: "#59070B",
          900: "#250304",
          950: "#0B0101",
        },
      },
    },
  },
  plugins: [],
};
