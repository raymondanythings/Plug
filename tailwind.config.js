const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--noto-sans)", ...fontFamily.sans],
        "sans-b": ["var(--sb-b)", ...fontFamily.sans],
        "sans-eb": ["var(--sb-b)", ...fontFamily.sans],
        "sans-h": ["var(--sb-b)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
