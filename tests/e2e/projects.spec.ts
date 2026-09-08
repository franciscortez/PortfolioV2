import { test, expect } from "@playwright/test";
import { projects } from "../../src/data/project";

test.describe("Project stories", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByLabel("Loading", { exact: true })).toHaveCount(0);
    await expect(
      page.getByRole("heading", { level: 1, name: /projects/i })
    ).toBeVisible();
  });

  test("filters all seven stories with keyboard and preserves focus", async ({
    page,
  }) => {
    await expect(page.getByRole("article")).toHaveCount(7);
    await expect(page.getByRole("button", { name: "All 7" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    const automation = page.getByRole("button", { name: "Automation 2" });
    await automation.focus();
    await page.keyboard.press("Enter");
    await expect(automation).toBeFocused();
    await expect(automation).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("article")).toHaveCount(2);
    await expect(
      page.getByRole("heading", { name: "NOLA PayMongo" })
    ).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "Gmail Inbox Organizer" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Job Tracker" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Twitch Insights" })
    ).toHaveCount(0);
    await page.getByRole("button", { name: "Web Dev 5" }).click();
    await expect(page.getByRole("article")).toHaveCount(5);
    await page.getByRole("button", { name: "All 7" }).click();
    await expect(page.getByRole("article")).toHaveCount(7);
  });

  test("opens all project pages, preserves content and supplied links, and returns", async ({
    page,
  }) => {
    for (const project of projects) {
      const link = page
        .getByRole("article", { name: project.title })
        .getByRole("link");
      await link.focus();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(new RegExp(`/projects/${project.slug}$`));
      await expect(
        page.getByRole("heading", {
          level: 1,
          name: project.title,
          exact: true,
        })
      ).toBeVisible();
      const article = page.getByRole("article");
      await expect(
        article.getByText(project.explanation, { exact: true })
      ).toBeVisible();
      for (const feature of project.features)
        await expect(article.getByText(feature, { exact: true })).toBeVisible();
      await expect(article.locator('a[target="_blank"]')).toHaveCount(
        project.links.length
      );
      for (const supplied of project.links)
        await expect(
          article.getByRole("link", {
            name: supplied.label + " (opens in new tab)",
            exact: true,
          })
        ).toHaveAttribute("href", supplied.href);
      await page
        .getByRole("link", { name: "Back to projects", exact: true })
        .click();
      await expect(page).toHaveURL(/\/projects$/);
    }
    await page.getByRole("link", { name: "Get in touch", exact: true }).click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("direct project URLs reload and unknown projects return 404", async ({
    page,
  }) => {
    await page.goto("/projects/nola-paymongo");
    await page.reload();
    await expect(
      page.getByRole("heading", { level: 1, name: "NOLA PayMongo" })
    ).toBeVisible();
    await expect(page).toHaveTitle(/NOLA PayMongo/);
    const response = await page.goto("/projects/unknown-project");
    expect(response?.status()).toBe(404);
  });

  test("detail layout stays readable and compact at mobile and desktop widths", async ({
    page,
  }, testInfo) => {
    await page.goto("/projects/gentlemens-quarters");
    await expect(page.getByLabel("Loading", { exact: true })).toHaveCount(0);
    for (const width of [375, 768, 1280, 1536]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ["light", "dark"]) {
        await page.evaluate(
          (theme) =>
            document.documentElement.classList.toggle("dark", theme === "dark"),
          theme
        );
        await expect(
          page.getByRole("heading", { name: "How it works" })
        ).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth
          )
        ).toBe(true);
        const article = page.getByRole("article");
        expect((await article.boundingBox())!.height).toBeLessThan(
          width < 640 ? 1700 : 1500
        );
        await expect
          .poll(() =>
            article
              .locator("img")
              .first()
              .evaluate((image: HTMLImageElement) => image.naturalWidth)
          )
          .toBeGreaterThan(0);
        await page.screenshot({
          path: testInfo.outputPath(`details-${width}-${theme}.png`),
          fullPage: true,
          animations: "disabled",
        });
      }
    }
  });

  test("renders screenshots without overflow in both themes", async ({
    page,
  }, testInfo) => {
    await expect(page.locator("article img")).toHaveCount(7);
    for (const width of [375, 768, 1280, 1536]) {
      await page.setViewportSize({ width, height: 900 });
      for (const theme of ["dark", "light"]) {
        await page.evaluate((theme) => {
          document.documentElement.classList.toggle("dark", theme === "dark");
        }, theme);
        for (const img of await page.locator("article img").all()) {
          await img.scrollIntoViewIfNeeded();
          await expect(img).toBeVisible();
          await expect
            .poll(() =>
              img.evaluate((node: HTMLImageElement) => node.naturalWidth)
            )
            .toBeGreaterThan(0);
        }
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth
          )
        ).toBe(true);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({
          path: testInfo.outputPath(`projects-${width}-${theme}.png`),
          fullPage: true,
          animations: "disabled",
        });
      }
    }
  });
});
