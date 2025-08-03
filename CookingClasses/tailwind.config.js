import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#D57A66',   // custom peach
        secondary: '#A7C957', // custom green
      }
    },
  },
  plugins: [],
}
