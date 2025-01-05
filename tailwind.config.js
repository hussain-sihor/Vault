/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}" , "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        PRIMARY:" #f5f5ff",
        SECONDARY: "#dbd9fe",
        TERTIARY: "#1f294d"
      }
    },
  },
  plugins: [],
}