import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-header":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        "midnight-blue": "#145da0",
        "dark-blue": "#0C2D48",
        blue: "#2E8BC0",
        "Baby-Blue": "#B1D4E0",
        "marron-opacity": "#00000087",
        "white-opacity": "#ffffff5d",
        "hover-btn": "#007bff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
