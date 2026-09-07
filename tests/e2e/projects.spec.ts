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

  test("filters projects by category (Web Development vs Automation)", async ({
    page,
  }) => {
    await page.goto("/projects");

    const webDevTab = page.getByRole("tab", { name: /Web Development/i });
    const automationTab = page.getByRole("tab", { name: /Automation/i });

    // Web Development is active by default
    await expect(webDevTab).toHaveAttribute("aria-selected", "true");
    await expect(automationTab).toHaveAttribute("aria-selected", "false");
    await expect(
      page.getByRole("heading", { level: 2, name: "Twitch Insights" })
    ).toBeVisible();

    // Click Automation tab
    await automationTab.click();
    await expect(automationTab).toHaveAttribute("aria-selected", "true");
    await expect(webDevTab).toHaveAttribute("aria-selected", "false");

    // NOLA PayMongo is displayed in detail view and tab list
    await expect(
      page.getByRole("heading", { level: 2, name: "NOLA PayMongo" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /NOLA PayMongo/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Gmail Inbox Organizer/i })
    ).toBeVisible();

    // Click on Gmail Inbox Organizer tab
    await page.getByRole("button", { name: /Gmail Inbox Organizer/i }).click();
    await expect(
      page.getByRole("heading", { level: 2, name: "Gmail Inbox Organizer" })
    ).toBeVisible();

    // Web development project should not be in the list
    await expect(
      page.getByRole("button", { name: /Twitch Insights/i })
    ).not.toBeVisible();

    // Click back to Web Development
    await webDevTab.click();
    await expect(webDevTab).toHaveAttribute("aria-selected", "true");
    await expect(
      page.getByRole("heading", { level: 2, name: "Twitch Insights" })
    ).toBeVisible();
  });
});
