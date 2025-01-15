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
        "retro-red": "var(--retro-red)",
        "retro-black": "var(--retro-black)",
        "retro-gray": "var(--retro-gray)",
        "retro-white": "var(--retro-white)",
      },
    },
  },
  plugins: [],
} satisfies Config;
