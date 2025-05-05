/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin720: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
      animation: {
        spin720: "spin720 400ms ease-in-out",
      },
    },
  },
  plugins: [],
};
