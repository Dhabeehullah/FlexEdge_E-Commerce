/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [   
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:"Poppins",
        titleFont:"Nunito Sans"
      },
      boxShadow: {
        boxxshad:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
      
    },
  },
  darkMode:"class",
  plugins: [nextui()],
};
