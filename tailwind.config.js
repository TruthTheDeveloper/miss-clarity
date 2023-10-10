/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/organisms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/molecules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '360px',
      md: '480px',
      lg: '768px',
      xl: '976px',
      xxl: '1440px'
    },
    colors: {
      'deep-pink':'#FF66B9',
      'shade-pink':'#F5EFF1',
      'light-pink':"#FFD8ED",
      'pink': '#E985A1',
      'text-white':'#fff',
      'text-black':'#303237',
      'grey':'#D9D9D980',
      'red':'#FF0000',
      'brown':'#1C0210',
      "white":'#fff',
      "green":"#48A301",
      "black":'#000'

    },
  },
  plugins: [],
}
