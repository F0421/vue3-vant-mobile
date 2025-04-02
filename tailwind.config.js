import { colors } from './src/styles/theme/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // 使用class策略来管理暗黑模式
  theme: {
    extend: {
      colors,
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
  // 由于项目使用了 Vant，我们需要确保 Tailwind 的样式不会覆盖 Vant 的样式
  corePlugins: {
    preflight: false,
  },
}
