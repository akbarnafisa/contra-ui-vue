describe('Button', () => {
  test.each([['variants'], ['size'], ['disabled'], ['full-width']])(
    '%p',
    async (variant) => {
      await global.goto(`buttons-button--variants`);
      await global.page.evaluateHandle(`document.querySelector(".c-button")`);
      await global.testUI();
    }
  );
});
