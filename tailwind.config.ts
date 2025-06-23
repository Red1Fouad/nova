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
        "dark-purple-blue": "#6a329f", // A slightly more vibrant purple
        "cyber-blue": "#00e8f0",
        "cyber-pink": "#ff00f1",
        "deep-purple": "#5A008A", // Your custom dark purple color
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #8e2de2",
          },
          "50%": {
            textShadow:
              "0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #8e2de2, 0 0 50px #4a00e0",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
