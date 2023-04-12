module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["./tsconfig.json"],
    extraFileExtensions: [".vue"]
  },
  plugins: ["jest", "sonarjs", "@typescript-eslint"],
  extends: [
    "prettier",
    "plugin:sonarjs/recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    '@typescript-eslint/no-namespace': "off",
    'no-async-promise-executor': 0,
    // https://eslint.org/docs/rules/
    // Eslint suggestion
    'no-lonely-if': 2,
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'prefer-template': 2,
    yoda: 2,
    // Eslint layout & formatting
    'space-before-function-paren': ["error", "always"],
    'vue/v-slot-style': [
      "error",
      {
        atComponent: "longform",
        default: "longform",
        named: "longform"
      }
    ],
    // https://eslint.vuejs.org/rules/
    // Vue Priority B: Strongly Recommended
    'vue/no-v-model-argument': "off",
    'vue/attribute-hyphenation': ["error", "never"],
    'vue/v-on-event-hyphenation': ["error", "never"],
    'vue/component-definition-name-casing': ["error", "PascalCase"],
    // Vue Priority C Recommended
    'vue/no-v-html': 0,
    // Vue Priority C Uncategorized
    'vue/component-name-in-template-casing': ["error", "PascalCase"],
    'vue/v-on-function-call': ["error", "never"],
    // Typescript
    '@typescript-eslint/no-var-requires': 0
  },
  settings: {
    polyfills: [
      // settings for eslint-plugin-compat
      // assume these items below are polyfill-ed because they have been used since the beginning
      // revisit this config if some compatibility issue appear in the future
      "Promise",
      "fetch",
      "location.origin",
      "performance.getEntries",
      "navigator.language"
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"]
    },
    'import/resolver': {
      node: {
        moduleDirectory: ["./src"]
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: ["**/*.spec.js"],
      env: {
        jest: true
      }
    }
  ]
}