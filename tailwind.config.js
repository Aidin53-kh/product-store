module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "340px",
      sm: "530px",
      md: "650px",
      lg: "810px",
      xl: "920px",
      "2xl": "1040px",
      "3xl": "1120px",
      "4xl": "1220px",
      "5xl": "1340px",
      "6xl": "1480px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      default: theme("colors.red.300", "colors.green.300"),
      primary: "#345344",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {},
  },
  plugins: [],
  darkMode: "class",
  important: true
}
