import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#171C20",
          secondary: "#20282D",
          card: "#252F34",
          subtle: "#1C2328",
        },
        border: {
          subtle: "#354147",
          accent: "#35B6A5",
        },
        accent: {
          primary: "#35B6A5",
          secondary: "#75C9BB",
          glow: "rgba(53, 182, 165, 0.15)",
        },
        text: {
          primary: "#F1F5F4",
          secondary: "#A8B5B2",
          muted: "#7A8A87",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
