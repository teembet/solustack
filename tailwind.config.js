/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./public/BG.svg')",
      },
      spacing: {
        15: "4rem",
        3.5: "0.875rem",
      },
    },

    fontSize: {
      xxs: ".6rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.56rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.8rem",
      "6xl": "3.5rem",
      "7xl": "4rem",
      "45":"45px",
      "25":"25px",
      "35":"35px",
      "81": "81px",
      "30":"30px",
      "40":"40px",
      "31":"31px",
      "16":"16px",
      "18":"18px",
      "20":"20px",
      "22":"22px",


    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      ".5": "0.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    // backgroundImage: (theme) => ({
    //   "bg-image-gradient-168": [
    //     "168deg",
    //     theme("colors.bg1"),
    //     theme("colors.bg2"),
    //   ],
    // }),
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      black50: "rgba(0, 0, 0, 0.5",
      dark1: "#101010",
      dark2: "#060606",
      dark3:"#0C0C0C",
      dark4:"#010101",
      grey1: "#00000029",
      grey2: "#C1C1C1",
      grey3: "#616161",
      grey4: "#3F3D38B0",
      grey5:"#1C1B1B99",
      blue1: "#2293EE",
      blue2: "#0068D2",
      blue3:"#004DD2",
      blue4:"#2293EE",
      yellow: "#FCBC14",
      green: "#9ACF61",
      purple1: "#917FE5",
      purple2: "#674BD2",
      inputGrey: "rgba(193, 193, 193,0.2)",
      darkBg: "#0A182F",
      bg1:"#010101",
      bg2:"#004DD2",
      error: "rgba(255, 255, 255, 0.05)",
      aboutBlue1:"rgba(0, 77, 210, 0.19)",
      aboutBlue2:"rgba(3, 56, 148, 0.19)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      generalSans: ["GeneralSans", "sans-serif"],
      graphie: ["Graphie", "sans-serif"],
      technor: ["Technor", "sans-serif"],
      supreme: ["Supreme", "sans-serif"],
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      168: '168deg',
                  }
              )
          }
       )
    })
  ],
};
