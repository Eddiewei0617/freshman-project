module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontGreen: "rgb(67, 190, 191)",
      },
    },
  },
  // 你想讓HTML可以直接用甚麼效果，就給他一些定義
  variants: {
    backgroundColor: ["active"],
    extend: {
      scale: ["responsive", "hover", "focus"],
      borderStyle: ["hover"],
    },
  },
  plugins: [],
};
