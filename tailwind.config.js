/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
      screens: {
        "firstmob": "431px",
        "secondmob": "1150px",
        "desk": "1440px"
      }
    },
  },

  plugins: [],
}



