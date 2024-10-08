import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
    "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    "1xl": { min: "1400px" },
    // => @media (min-width: 1279px) { ... }
    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg2: { max: "1200px" },
    // => @media (max-width: 1120px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md0: { max: "900px" },
    // => @media (max-width: 900px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm2: { max: "659px" },
    // => @media (max-width: 659px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    ssms: { max: "500px" },
    // => @media (max-width: 500px) { ... }

    ssm: { max: "460px" },
    // => @media (max-width: 460px) { ... }

    ssmm: { max: "400px" },
    // => @media (max-width: 460px) { ... }
  },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
