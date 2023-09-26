import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "dt-exl": { min: "1779px" },
        "dt-xl": { max: "1660px" },
        "dt-l": { max: "1440px" },
        "tl-l": { max: "1366px" },
        "tl-p": { max: "1000px" },
        mb: { max: "767px" },
      },

      colors: {
        green: "#8FF80E",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;