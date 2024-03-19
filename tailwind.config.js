/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    // screens: {
    //   // "sm": "320px",
    //   // "sl": "375px",
    //   // "sxl": "425px",

    //   // "md": "768px",

    //   // "lg": "1024px",

    //   // "xl": "1440px",

    //   // "2xl": "2560px",

      'sm': { 'max':'321px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'sl': { 'min': '321px', 'max': '376px'},
      'sxl': { 'min': '376px', 'max': '426px'},
      'md': {'min': '426px', 'max': '769px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '769px', 'max': '1025px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1025px', 'max': '1441px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1441px'},
    // },
  },
  plugins: [],
};
