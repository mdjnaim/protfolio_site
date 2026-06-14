/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#111827",
        "bg-card": "#1a2332",
        "accent": "#06b6d4",
        "accent-hover": "#0891b2",
        "text-secondary": "#9ca3af",
        "text-muted": "#6b7280",
        "border-dark": "#1f2937",
      },
    },
  },
  plugins: [],
};