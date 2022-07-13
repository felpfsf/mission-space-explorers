/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bgHomeDesktop: 'url(/src/assets/home/background-home-desktop.jpg)',
        bgHomeTablet: 'url(/src/assets/home/background-home-tablet.jpg)',
        bgHomeMobile: 'url(/src/assets/home/background-home-mobile.jpg)',

        bgDestDesktop:
          'url(/src/assets/destination/background-destination-desktop.jpg)',
        bgDestTablet:
          'url(/src/assets/destination/background-destination-tablet.jpg)',
        bgDestMobile:
          'url(/src/assets/destination/background-destination-mobile.jpg)',

        bgCrewDesktop: 'url(/src/assets/crew/background-crew-desktop.jpg)',
        bgCrewTablet: 'url(/src/assets/crew/background-crew-tablet.jpg)',
        bgCrewMobile: 'url(/src/assets/crew/background-crew-mobile.jpg)',

        bgTechDesktop:
          'url(/src/assets/technology/background-technology-desktop.jpg)',
        bgTechTablet:
          'url(/src/assets/technology/background-technology-tablet.jpg)',
        bgTechMobile:
          'url(/src/assets/technology/background-technology-mobile.jpg)'
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
