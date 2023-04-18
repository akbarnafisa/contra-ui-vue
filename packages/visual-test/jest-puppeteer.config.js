const getConfig = require('jest-puppeteer-docker/lib/config');

const baseConfig = getConfig();
const customConfig = Object.assign(
  {
    connect: {
      defaultViewport: {
        width: 1040,
        height: 768,
      },
    },
    browserContext: 'incognito',
    chromiumFlags: '–ignore-certificate-errors',
  },
  baseConfig
);

module.exports = customConfig;
