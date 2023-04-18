describe('Button', () => {
  test.each([['checked'], ['disabled'], ['readonly']])(
    '%p',
    async (variant) => {
      await global.goto(`inputs-radio--${variant}`);
      await global.page.evaluateHandle(`document.querySelector(".c-radio")`);
      await global.testUI();
    }
  );
});
