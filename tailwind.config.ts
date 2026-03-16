import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
        "mono-sci": ["Source Code Pro", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        nm: {
          dark: "hsl(var(--nm-bg-dark))",
          card: "hsl(var(--nm-bg-card))",
          green: "hsl(var(--nm-accent-green))",
          purple: "hsl(var(--nm-accent-purple))",
          warn: "hsl(var(--nm-accent-warn))",
          gold: "hsl(var(--nm-gold))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        content: "800px",
        page: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
