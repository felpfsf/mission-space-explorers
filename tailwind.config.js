/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
      fontSize: {
        titleDynamic: 'clamp(5rem, 3.5417rem + 6.4815vw, 9.375rem)',
        subTitleDynamic: 'clamp(1rem, 0.8333rem + 0.7407vw, 1.75rem)',
        paragraphDynamic: 'clamp(0.938rem, 0.8757rem + 0.2770vw, 1.125rem)',
        navDynamic: 'clamp(0.875rem, 0.8333rem + 0.1852vw, 1rem)',
        btnTextDynamic: 'clamp(1.25rem, 1.0000rem + 1.1111vw, 2rem)'
      },
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
