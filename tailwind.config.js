const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // iphone se
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    // 사용자 정의 유틸리티 클래스를 추가(https://tailwindcss.com/docs/plugins#static-utilities)
    plugin(({ addUtilities }) => {
      // 한국어에 적합한 word-break: keep-all 룰이 없으므로, 유틸리티로 추가함
      return addUtilities({
        '.break-keep-all': {
          'word-break': 'keep-all',
        },
      })
    }),
  ],
}
