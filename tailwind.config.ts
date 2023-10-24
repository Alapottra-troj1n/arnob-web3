import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mydark: "#060A0E",
        primary: "#F74A53",
        mywhite: "#ECECF0",
        mygray: "#CCCCCC",
        mylightgray: "#D9D9D9",
      },
      fontFamily: {
        baseNeue: ["var(--font-base-neue)"],
        clash: ["var(--font-clash)"],
      },
    },
  },
  plugins: [],
};
export default config;
