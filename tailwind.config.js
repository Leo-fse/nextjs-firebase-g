module.exports = {
  important: true,
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      hoverBg: "#e8f5fe",
      twitterColor: "#50b7f5",
      widgets: "#f5f8fa",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      twitterColor: "#50b7f5",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      twitterColor: "#e6ecf0",
    }),
    flex: { 1: "1 1 0%", 3: "3 3 0%", 4: "4 4 0%" },
    minWidth: {
      "fit-content": "fit-content",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
