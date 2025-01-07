/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Fondo oscuro
        secondary: "#1E293B", // Fondo intermedio
        neonPink: "#F72585",
        neonCyan: "#4CC9F0",
        neonPurple: "#7209B7",
      },
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"], // Estilo técnico
      },
    },
  },
  plugins: [],
};
