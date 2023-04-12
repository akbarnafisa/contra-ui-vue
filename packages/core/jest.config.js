// const { createTransformer } = require('@swc/jest')

// const swcJestTransformer = createTransformer()

/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src/components/'],
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    '!src/components/**/*.test.js',
    '!src/components/**/*.stories.js',
    '!src/components/**/index.js',
    '!src/components/**/index-es.js',
    '!src/components/**/globalComponents.js',
  ],
  moduleFileExtensions: ['js', 'vue', 'ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2021',
        },
        sourceMaps: true,
      },
    ],
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  snapshotSerializers: ['../../node_modules/jest-serializer-vue'],
  collectCoverage: false,
  coverageDirectory: 'coverage/unit',
  coverageThreshold: {
    './src/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'html', 'lcov'],
}
