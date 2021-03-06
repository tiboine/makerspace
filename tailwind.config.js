module.exports = {
  important: true,
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    backgroundPosition: {
      custom: "background-position: -200px -100px",
    },
    extend: {
      colors: {
        primary: "#ff6363",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
