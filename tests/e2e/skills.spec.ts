import { test, expect } from "@playwright/test";

test.describe("Skills Interactivity", () => {
  test("filters skills by category tab", async ({ page }) => {
    await page.goto("/skills");
    await expect(
      page.getByRole("heading", { level: 1, name: /skills/i })
    ).toBeVisible();

    const frontendTab = page.getByRole("button", { name: /^frontend$/i });
    if (await frontendTab.isVisible()) {
      await frontendTab.click();
      await expect(page.getByText("React")).toBeVisible();
      await expect(page.getByText("Tailwind CSS")).toBeVisible();
    }
  });
});
