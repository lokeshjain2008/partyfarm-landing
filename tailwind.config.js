/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58CC02',
        accent: '#FFD800',
        secondary: '#1CB0F6',
        background: '#FFFFFF',
        text: '#222222',
      },
      fontFamily: {
        heading: ["'Baloo 2'", 'cursive'],
        body: ["Inter", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
