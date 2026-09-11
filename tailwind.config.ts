import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgm: {
          blue: "#024E7E",
          "blue-dark": "#024E7E",
          "blue-deep": "#024E7E",
          "blue-light": "#0367A6",
          gold: "#CA9625",
          "gold-dark": "#A3771B",
          "gold-light": "#E8B94B",
          dark: "#08101D",
          slate: "#0F1A2A",
          gray: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
