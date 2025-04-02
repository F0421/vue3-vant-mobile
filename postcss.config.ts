export default {
  // 支持热更新
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    // https://github.com/wswmsword/postcss-mobile-forever
    'postcss-mobile-forever': {
      appSelector: '#app',
      viewportWidth: 375,
      maxDisplayWidth: 600,
      border: true,
      rootContainingBlockSelectorList: [
        'van-tabbar',
        'van-popup',
      ],
    },
  },
}
