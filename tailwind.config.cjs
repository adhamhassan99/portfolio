/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Navy: "#0a192f",
        LightNavy: "#112240",
        LightestNavy: "#233554",
        Slate: "#8892b0",
        LightSlate: "#a8b2d1",
        LightestSlate: "#ccd6f6",
        White: "#e6f1ff",
        Green: "#64ffda",
        greenTint: "rgba(100, 255, 218, 0.1)",
        GreenSecondary: "#53d3b9",
      },
    },
  },
  plugins: [],
};
