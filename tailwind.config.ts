// tailwind.config.ts

import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5235",
        secondary: "#3b56e6",
      },
    },
  },
  plugins: [],
};

export default config;
