import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mydark: "#060A0E",
        primary: "#F74A53",
        mywhite: "#ECECF0",
        mygray: "#CCDAE7",
        mylightgray: "#D9D9D9",
      },
      fontFamily: {
        baseNeue: ["var(--font-base-neue)"],
        clash: ["var(--font-clash)"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
