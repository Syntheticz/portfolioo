/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'covers' : "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg')",
      },
      fontFamily: {
        'Montserrat': 'Montserrat, sans-serif',
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
