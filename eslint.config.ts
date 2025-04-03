import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: {
      css: true,
    },
  },
  {
    rules: {
      'ban-ts-ignore': 'off',
      'explicit-function-return-type': 'off',
      'no-explicit-any': 'off',
      'no-var-requires': 'off',
      'no-empty-function': 'off',
      'vue/custom-event-name-casing': 'off',
      'no-use-before-define': 'off',
      'ban-ts-comment': 'off',
      'ban-types': 'off',
      'no-non-null-assertion': 'off',
      'explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off',
      'space-before-function-paren': 'off',
      'vue/attributes-order': 'off',
      'vue/one-component-per-file': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/script-setup-uses-vars': 'off',
    },
  },
  {
    ignores: ['.github/**', 'scripts/**'],
  },
)
