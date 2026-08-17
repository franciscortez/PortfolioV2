import { test, expect } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test("toggles dark and light themes", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      const hamburger = page.locator(
        'button[aria-label="Open navigation menu"]'
      );
      if (await hamburger.isVisible()) {
        await hamburger.click();
      }
    }

    const themeButton = page
      .locator('button[aria-label^="Switch to"]:visible')
      .first();
    await expect(themeButton).toBeVisible();

    const html = page.locator("html");
    const initialTheme =
      (await html.getAttribute("data-theme")) ||
      (await html.getAttribute("class"));

    // Click theme toggle
    await themeButton.click();
    await page.waitForTimeout(300);

    const newTheme =
      (await html.getAttribute("data-theme")) ||
      (await html.getAttribute("class"));
    expect(newTheme).not.toBe(initialTheme);
  });
});
