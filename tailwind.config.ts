import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "64px",
        "xl": "40px",
        "lg": "32px",
        "base": "24px",
        "sm": "18px",
      },
      colors: {
        white: '#fff',
        orange: '#DE9406',
        primary: '#051325',
        purple: '#B161E7',
        green: '#BDFF00',
        red: '#FF1F00',
        blue: "#0085FF",
        dark: '#101F29'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)"]
      }
    },
  },
  plugins: [],
};
export default config;
