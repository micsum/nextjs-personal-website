import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          400: "#00E5FF",
          500: "#00B8D4",
        },
        secondary: {
          500: "#7E57C2",
          600: "#5E35B1",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
