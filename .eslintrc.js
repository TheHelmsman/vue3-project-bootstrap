const [error, warn, off] = [2, 1, 0];

module.exports = {
  root: true,
  env: { node: true },
  extends: ['kms', 'plugin:prettier/recommended', 'plugin:vue/vue3-essential', '@vue/typescript/recommended'],
  plugins: ['@typescript-eslint', 'modules-newline', 'prettier'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    globalThis: true,
  },
  rules: {
    semi: off,
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        semi: true,
        tabWidth: 2,
        singleAttributePerLine: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  ignorePatterns: ['vue.config.js', 'locales/*.json', 'shims-vue.d.ts', 'shims-window.d.ts'],
};
