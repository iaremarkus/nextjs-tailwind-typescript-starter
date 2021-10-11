// const _ = require("lodash");
// const plugin = require("tailwindcss/plugin");

/**
 * Create the global baseline styles for the project. Syntax
 * style is CSS-in-JS
 */
const globalStyles = ({ addBase, config }) => {
  addBase({
    body: {
      fontFamily:
        "'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    }
  });
};

module.exports = {
  // mode: 'jit', doesn't seem to work well with gql 🤷
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primaryPrimaryBlue: "#002855"
    },
    spacing: {
      0: "0px",
      xs: "12px",
      s: "24px",
      xm: "40px",
      m: "48px",
      l: "56px"
    },
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"]
    }
  },
  plugins: [globalStyles]
};
