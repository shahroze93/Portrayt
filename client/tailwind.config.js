module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-green": "#66cc75",
        "pri-teal": "#008080",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
