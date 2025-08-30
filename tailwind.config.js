/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyberBlack: "#0a0a0a",
        neonPurple: "#9b59b6",
        neonPink: "#ff0080",
        neonBlue: "#00ffff",
        neonGreen: "#39ff14",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
      },
    },
  },
  plugins: [],
};
