import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single'
    // commaDangle: 'never' // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: false,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  rules: {
    'style/comma-dangle': [ 'error', 'never' ],
    // 'ts/semi': 'off',
    // 'curly': ['error', 'all'],
    // 'no-console': 'off',
    // 'no-alert': 'off',
    // 'vue/html-self-closing': 'off',
    // 'style/semi': ['error', 'always'],
    // 'style/indent': 2, // 4, or 'tab'
    // 'style/quotes': ['error', 'single'],
    // 'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/array-bracket-spacing': [ 'error', 'always' ], // [ 'x' ]
    'curly': [ 'off', 'all' ] // move long attrs to next line
    // 'vue/html-self-closing': [ 'error', {
    //   html: {
    //     void: 'never',
    //     normal: 'always',
    //     component: 'always'
    //   },
    //   svg: 'always',
    //   math: 'always'
    // } ]
  },

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    '**/fixtures'
    // ...globs
  ]
})
