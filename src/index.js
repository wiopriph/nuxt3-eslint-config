module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
    '@stylistic/js',
    '@stylistic/ts',
  ],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:security/recommended',
    'plugin:anti-trojan-source/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-extra-semi': 'error',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    camelcase: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'one-var': ['error', 'never'],
    'no-eval': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-sequences': ['error', { allowInParentheses: false }],
    'brace-style': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-nested-ternary': 'error',
    'object-shorthand': ['error', 'properties'],
    'arrow-body-style': ['error', 'as-needed'],
    'max-statements-per-line': 'error',
    'operator-linebreak': ['error', 'after'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],

    // import
    'import/newline-after-import': ['error', {
      count: 2,
    }],

    // too noisy rule. In most cases is false-positive
    'security/detect-object-injection': 'off',

    // @stylistic/js
    '@stylistic/js/quotes': ['error', 'single'],
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    '@stylistic/js/operator-linebreak': ['error', 'after'],
    '@stylistic/js/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: 'const', next: 'const' },
      { blankLine: 'any', prev: 'let', next: 'let' },
      { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'] },
    ],

    // @stylistic/ts
    '@stylistic/ts/quotes': ['error', 'single'],
    '@stylistic/ts/indent': ['error', 2],
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'any', prev: 'const', next: 'const' },
      { blankLine: 'any', prev: 'let', next: 'let' },
      { blankLine: 'always', prev: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['block', 'multiline-block-like', 'for', 'if', 'multiline-expression'] },
    ],

    // unicorn
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/catch-error-name': ['error', { ignore: ['^error\\d*$'] }],
    'unicorn/prevent-abbreviations': ['error', {
      extendDefaultReplacements: false,
      replacements: {
        e: {
          event: true,
          error: true,
        },
      },
    }],

    // Vue
    'vue/padding-line-between-tags': ['error', [
      { blankLine: 'always', prev: '*', next: '*' },
    ]],
    'vue/require-prop-types': 'error',
    'vue/multi-word-component-names': 0,
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      switchCase: 0,
      ignores: [],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
      },
    ],
    'vue/html-quotes': ['error', 'double', {
      avoidEscape: false,
    }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/custom-event-name-casing': 'error',
    'vue/attributes-order': 'error',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/v-on-event-hyphenation': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-mutating-props': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
      blocks: {
        script: {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
        template: {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
        style: {
          singleline: 'always',
          multiline: 'always',
          maxEmptyLines: 0,
        },
      },
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: true,
    }],
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true,
    }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      allowEmptyLines: false,
    }],
    'vue/no-unused-properties': ['error', {
      groups: [
        'props',
      ],
      ignorePublicMembers: true,
    }],
  },
};
