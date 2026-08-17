import { test, expect } from "@playwright/test";

test.describe("Projects Interactivity", () => {
  test("switches active project tabs and updates detail view", async ({
    page,
  }) => {
    await page.goto("/projects");

    // Initially Twitch Insights is visible
    await expect(
      page.getByRole("heading", { level: 2, name: "Twitch Insights" })
    ).toBeVisible();

    // Click on Gentlemen's Quarters project tab
    const projectTab = page.getByRole("button", {
      name: /Gentlemen's Quarters/i,
    });
    if (await projectTab.isVisible()) {
      await projectTab.click();
      await expect(
        page.getByRole("heading", { level: 2, name: "Gentlemen's Quarters" })
      ).toBeVisible();
    }
  });
});
