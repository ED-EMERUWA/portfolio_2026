/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
"./public/index.html",
],
  theme: {
    extend: {
      colors: {
c1: '#E9B48A', // light tan
c2: '#956959', // warm brown
cmid: '#78504A', // mid brown
c3: '#5C352C', // dark brown
c4: '#2A1713', // very dark brown
textPrimary: '#2B1815' ,
textSecondary: '#5C352C' // c3
},
    },
  },
  plugins: [],
}

