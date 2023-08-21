/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "download-app": "url('../src/assets/banner.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
