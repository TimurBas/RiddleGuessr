/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        primary: "#101023",
        darkerPrimary: "#0b0b18",
        darkerGray: "#e3e3e6"
      },
    },
  },
}
