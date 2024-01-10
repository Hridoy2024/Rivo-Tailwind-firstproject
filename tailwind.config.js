/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green:'#224F34',
        bgGreen:'#C2EFD4',
        bgblack:'#454545',
        TextDark:'373737',
        
      },

      fontFamily: {
        rufina: ["Rufina", "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        '3xl': '6px 33px 59px 0px rgba(0, 0, 0, 0.30);',
      }
    },
  },
  plugins: [],
};
