module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./compo/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "header-bg-color": "#dedede",
        "header-icon-color": "#919191",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
