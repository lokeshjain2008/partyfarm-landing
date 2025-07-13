/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        accent: '#38a169',
        'accent-light': '#68d391',
        background: '#ffffff',
        surface: '#f7fafc',
        text: '#2d3748',
        'text-light': '#4a5568',
        'text-muted': '#718096',
        border: '#e2e8f0',
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        body: ["Inter", 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
