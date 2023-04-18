module.exports = {
  preset: 'jest-puppeteer-docker',
  // specify a list of setup files to be executed after the test framework has been set up but before any test suites are run.
  setupFilesAfterEnv: ['./jest-setup/test-environment-setup.js'],
  // executed once before any test suites are run
  globalSetup: './jest-setup/setup.js',
  // The function will be triggered once after all test suites
  globalTeardown: './jest-setup/teardown.js',
  testMatch: ['**/?(*.)+(visual.spec).[tj]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: './visual-test-result/index.html',
        pageTitle: 'Test Result',
        includeFailureMsg: true,
        // Path to a javascript file that should be injected into the test report,
        customScriptPath: './inject-fail-images.js',
      },
    ],
  ],
};
