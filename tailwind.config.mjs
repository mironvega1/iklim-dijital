/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050505",
        panel: "#101010",
        panelSoft: "#151515",
        textMuted: "#B8B8B8",
        lime: "#93C83E",
      },
      boxShadow: {
        glow: "0 0 50px rgba(147,200,62,0.20)",
        soft: "0 24px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "lime-gradient": "linear-gradient(135deg, #FFFFFF 0%, #93C83E 45%, #D8F7A6 100%)",
      },
    },
  },
  plugins: [],
};
