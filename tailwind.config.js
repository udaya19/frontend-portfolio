/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "about-image": "100px",
      },
      height: {
        "about-image": "100px",
      },
      colors: {
        mediumGray: "rgb(128,128,128)",
        primary: "rgb(40, 87, 164)",
        secondary: "rgb(236, 77, 28)",
      },
      fontSize: {
        icon: "20px",
      },
    },
  },
  plugins: [],
};
