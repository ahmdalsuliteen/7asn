import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2F46",
          50: "#E6EDF2",
          100: "#C4D2DD",
          200: "#8FA8BC",
          300: "#5A7E9A",
          500: "#0B2F46",
          600: "#082638",
          700: "#061C2A",
          800: "#04131C",
          900: "#02090E",
        },
        gold: {
          DEFAULT: "#E2A93A",
          400: "#F1C36B",
          500: "#E2A93A",
          600: "#B88723",
        },
        accent: {
          red: "#C8102E",
        },
        ink: "#0B2F46",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
