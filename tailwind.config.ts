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
        "custom-form": "0 3px 9px rgba(0,0,0,0.5);",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.15)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.2)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.25)", // ombre très grande
        custom: "0 1px 7px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        "midnight-blue": "#145da0",
        "dark-blue": "#0C2D48",
        blue: "#2E8BC0",
        "Baby-Blue": "#B1D4E0",
        "marron-opacity": "#00000087",
        "marron-opacity-claire": "#0000004d",
        "blue-opcity": "#009dff11",
        "white-opacity": "#ffffff5d",
        "hover-btn": "#007bff",
        "white-opacity-plus": "#ffffff5d",
        "blue-linght": "#0057b365",
        "black-opacity": "#0000004d",
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
