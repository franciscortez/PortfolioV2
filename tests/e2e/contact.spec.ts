import { test, expect } from "@playwright/test";

test.describe("Contact Page Interaction", () => {
  test("renders contact overview and form inputs", async ({ page }) => {
    await page.goto("/contact");

    const main = page.locator("main");
    await expect(main.getByText("francisemil.cortez@gmail.com")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /send message/i })
    ).toBeVisible();
  });
});
