/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // Font Dynamic Size
        btnTextDynamic: 'clamp(1.25rem, 1.0000rem + 1.1111vw, 2rem)',
        mainTitleSize: 'clamp(6.25rem, 5.2083rem + 4.6296vw, 9.375rem)',
        pagesTitleSize: 'clamp(1rem, 0.9583rem + 0.1852vw, 1.125rem)',
        destNameSize: 'clamp(5rem, 4.5833rem + 1.8519vw, 6.25rem)',
        destMenuSize: 'clamp(0.875rem, 0.8333rem + 0.1852vw, 1rem)',
        crewTitleSize: 'clamp(1.5rem, 0.8333rem + 2.9630vw, 3.5rem)',
        crewRoleSize: 'clamp(1rem, 0.6667rem + 1.4815vw, 2rem)',
        techTitleSize: 'clamp(0.875rem, 0.8333rem + 0.1852vw, 1rem)',
        paragraphSize: 'clamp(0.938rem, 0.8757rem + 0.2770vw, 1.125rem)'
      },
      colors: {
        palette: {
          accent: '#0b0d17',
          paragraph: '#d0d6f9'
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif']
      }
    }
  },
  plugins: []
}
