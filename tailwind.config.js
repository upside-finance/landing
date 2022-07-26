module.exports = {
  // purge: [],
  content: ["*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#F1F2F6",
        blue: { light: "#BBE6E4", sky: "#42BFDD", DEFAULT: "#235B8B" },
        blueTran: "#235B8BC7",
        red: "#DA395C",
        green: "#2EE8B6",
        pink: "#FF66B3",
        dark_gray: "#181a20",
      },
      fontFamily: {
        sans: ['"Ubuntu"'],
        // headings: ["Red Hat Display"],
      },
      boxShadow: {
        DEFAULT: "-4px 4px 0 #FF66B3",
        blue: "0px 0px 6px #235B8B",
        dark: "0px 2px 24px rgba(37, 86, 151, 0.58), 0px 20px 42px rgba(94, 100, 117, 0.57)",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
};
