/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        backgroundColor: {
          'primary': '#161d6f', 
          'secondary': '#ffed4a', 
        },
        borderColor: {
          'primary' : '#007bff',
        },

        padding: {
          '3.75' : '0.375rem'
        },
        fontFamily: {
          custom: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
          ],
        },

    },
  },
  plugins: [],
}

