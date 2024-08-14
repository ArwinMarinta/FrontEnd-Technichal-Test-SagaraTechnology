/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        RED01: "#A51535",
        RED02: "#F6E8EB",
        GRAY01: "#9E9E9E",
        GRAY02: "#212B36",
        GRAY03: "#637381",
        GRAY04: "#E2E8F0", //border
        GRAY05: "#202224",
        GRAY06: "#606060",
        GRAY07: "#D0D5DD", //border student
        GRAY08: "#344054", //font stundent
        GRAY09: "#667085", //font search student
        GRAY10: "#DADADA", //border add student
        GRAY11: "#8A92A6", //text tabe
        BLACK01: "#1C1C1C",
        WHITE01: "#F4F4F4",
        WHITE02: "#F9FAFB",
        GREEN01: "#00B69B",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
