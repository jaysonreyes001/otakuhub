const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
     "./index.html",
    "./pages/**/*.{ts,tsx,vue,js}",
    "./components/**/*.{ts,tsx,vue,js}",
    "./app/**/*.{ts,tsx,vue,js}",
    "./src/**/*.{ts,tsx,vue,js}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "#eaf1ff",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "#ebe4f7",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
            DEFAULT: "#00ab55",
            light: "#ddf5f0",
            "dark-light": "rgba(0,171,85,.15)",
        },
        danger: {
            DEFAULT: "#e7515a",
            light: "#fff5f5",
            "dark-light": "rgba(231,81,90,.15)",
        },
        warning: {
            DEFAULT: "#e2a03f",
            light: "#fff9ed",
            "dark-light": "rgba(226,160,63,.15)",
        },
        info: {
            DEFAULT: "#2196f3",
            light: "#e7f7ff",
            "dark-light": "rgba(33,150,243,.15)",
        },
        dark: {
            DEFAULT: "#3b3f5c",
            light: "#eaeaec",
            "dark-light": "rgba(59,63,92,.15)",
        },
        black: {
            DEFAULT: "#0e1726",
            light: "#e3e4eb",
            "dark-light": "rgba(14,23,38,.15)",
        },
        white: {
            DEFAULT: "#ffffff",
            light: "#e0e6ed",
            dark: "#888ea8",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
