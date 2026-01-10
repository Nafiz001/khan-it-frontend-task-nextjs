import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D7BEF",
        "primary-hover": "#1664c4",
        "background-light": "#F0F8FF",
        "background-dark": "#0B1120",
        "card-purple-light": "#F3E8FF",
        "card-purple-dark": "#4C1D95",
        "card-blue-light": "#DBEAFE",
        "card-blue-dark": "#1E3A8A",
        "card-orange-light": "#FFEDD5",
        "card-orange-dark": "#7C2D12",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
