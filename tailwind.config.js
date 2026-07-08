/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B3D91',
          blue2: '#1656C6',
          mint: '#12C7B0',
          ink: '#0A1628',
          slate: '#5B6B82',
        },
      },
      fontFamily: {
        sans: ['"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0B3D91 0%, #1656C6 55%, #12C7B0 100%)',
      },
      boxShadow: {
        card: '0 8px 30px rgba(11, 61, 145, 0.08)',
        'card-lg': '0 20px 60px rgba(11, 61, 145, 0.14)',
      },
    },
  },
  plugins: [],
}
