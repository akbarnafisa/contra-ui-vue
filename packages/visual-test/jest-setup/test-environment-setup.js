const { toMatchImageSnapshot } = require('jest-image-snapshot');

jest.setTimeout(10000);

expect.extend({ toMatchImageSnapshot });

global.goto = async (id) => {
  await global.page.goto(
    `http://host.docker.internal:3000/iframe.html?id=${id}&viewMode=story`
  );
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
};

global.testUI = async () => {
  await global.page.waitForSelector('#root');
  const previewHtml = await global.page.$('body');
  expect(await previewHtml.screenshot()).toMatchImageSnapshot();
};
