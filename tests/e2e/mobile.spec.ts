import { test, expect } from "@playwright/test";

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("opens and closes mobile navigation drawer", async ({ page }) => {
    await page.goto("/");

    const hamburger = page.locator('button[aria-label="Open navigation menu"]');
    await expect(hamburger).toBeVisible();

    // Open drawer
    await hamburger.click();
    const drawer = page.locator("#mobile-navigation");
    await expect(drawer).toBeVisible();

    // Navigate to projects
    const projectsLink = drawer.locator('a[href="/projects"]');
    await projectsLink.click();
    await expect(page).toHaveURL(/.*\/projects/);
  });
});
