/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      content: {
        'mailIcon': 'url("/src/assets/icons/mail.svg")',
        'profileIcon': 'url("/src/assets/icons/profile.svg")',
        'phoneIcon': 'url("/src/assets/icons/phone.svg")',
      },
    },
  },
  plugins: [],
}
