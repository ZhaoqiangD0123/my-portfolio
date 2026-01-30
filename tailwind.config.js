/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core background options
        background: '#0a0a0a', // deep black from AGENTS.md
        // Semantic aliases aligned with PRD / TECH_DESIGN
        primary: {
          DEFAULT: '#0f172a', // slate-900
        },
        text: {
          primary: '#cbd5f5', // slate-300
          muted: '#6b7280', // slate-500
        },
        accent: {
          teal: '#2dd4bf', // teal-400
          emerald: '#34d399', // emerald-400
          blue: '#3b82f6', // blue-500 for gradients
        },
      },
    },
  },
  plugins: [],
}
