describe('Button', () => {
  test.each([['checked'], ['disabled'], ['readonly']])(
    '%p',
    async (variant) => {
      await global.goto(`inputs-checkbox--${variant}`);
      await global.page.evaluateHandle(`document.querySelector(".c-checkbox")`);
      await global.testUI();
    }
  );
});
