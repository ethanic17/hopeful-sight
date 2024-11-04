/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Main theme colors where it would be black, white, blue, and gray
        'primary-black': '#000000',
        'primary-blue': '#0070f3',
        'primary-gray': '#f3f4f6',
        'secondary-gray': '#6b7280',
      }
    },
  },
  plugins: [],
};