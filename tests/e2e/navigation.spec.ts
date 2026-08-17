import { test, expect } from "@playwright/test";

test.describe("Navigation & Route Availability", () => {
  test("loads homepage and navigates through main pages", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Francis Emil M. Cortez/);

    const navigateTo = async (path: string) => {
      if (isMobile) {
        const hamburger = page.locator(
          'button[aria-label="Open navigation menu"]'
        );
        if (await hamburger.isVisible()) {
          await hamburger.click();
        }
        await page.locator(`#mobile-navigation a[href="${path}"]`).click();
      } else {
        await page
          .locator(`aside[aria-label="Portfolio sidebar"] a[href="${path}"]`)
          .click();
      }
    };

    // Navigate to Projects
    await navigateTo("/projects");
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(
      page.getByRole("heading", { level: 1, name: /projects/i })
    ).toBeVisible();

    // Navigate to Experience
    await navigateTo("/experience");
    await expect(page).toHaveURL(/.*\/experience/);
    await expect(page.locator("main").getByText("Leveric")).toBeVisible();

    // Navigate to Skills
    await navigateTo("/skills");
    await expect(page).toHaveURL(/.*\/skills/);
    await expect(
      page.getByRole("heading", { level: 1, name: /skills/i })
    ).toBeVisible();

    // Navigate to Contact
    await navigateTo("/contact");
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(
      page.getByRole("button", { name: /send message/i })
    ).toBeVisible();
  });
});
