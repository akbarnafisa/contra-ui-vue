const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const { teardown: teardownPuppeteer } = require('jest-puppeteer-docker');

module.exports = async function globalTeardown(jestConfig) {
  global.__SERVER__.close();
  await teardownPuppeteer(jestConfig);

  const dirname = path.join(__dirname, '..');

  fs.copyFileSync(
    `${dirname}/jest-reporters/inject-fail-images.js`,
    `${dirname}/visual-test-result/inject-fail-images.js`
  );

  try {
    fse.copySync(
      `${dirname}/src/__image_snapshots__/__diff_output__`,
      `${dirname}/visual-test-result/__diff_output__`,
      {
        overwrite: true,
      }
    );
  } catch {}
};
