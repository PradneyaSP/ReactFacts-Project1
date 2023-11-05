/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      ...require("tailwindcss/colors"),
      "react-heading-dark": "#61DAFB",
      "react-heading-light": "#00ABCA",
      "react-toggle-dark" : "#2B283A",
      "react-toggle-light" : "#D5D4D8",
    },
    fontFamily: {
      poppins: ['Poppins', 'sans'],
      inter: ['Inter', 'sans'],
    },
  },
  plugins: [],
};
