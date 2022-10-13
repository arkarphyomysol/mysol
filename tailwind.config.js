/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prinary: "#171C23",
        secondary: "#21272F",
        tertiary: "#88949B",
        alcohol: "#F0FCF9",
        ruby: "#29D882",
        "secondary-ruby": "#00BD95",
        CetaceanBlue: "#051345",
        CoolBlack: "#092C62",
        pepperoncini: "#dbc851",
        "radar-blip-green": "#9BEF7F",
        monarchist: "#5064D3",
        "coral-silk": "#F2A57B",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        DMSans: "'DM Sans', sans-serif",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
