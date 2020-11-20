const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    textColor: (theme) => ({
      ...theme("colors"),
      "yellow-theme": "#C9B92D",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      "yellow-theme": "#C9B92D",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      body: "#121212",
      sideNav: "#252525",
      "yellow-theme": "#C9B92D",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
};
