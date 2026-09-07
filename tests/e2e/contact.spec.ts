import { test, expect } from "@playwright/test";

const endpoint = "https://api.web3forms.com/submit";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    // Default interception prevents routine tests from ever sending real mail.
    await page.route(endpoint, (route) =>
      route.fulfill({ status: 200, json: { success: true } })
    );
    await page.goto("/contact");
    await expect(page.getByLabel("Loading", { exact: true })).toHaveCount(0);
  });

  test("renders overview and form inputs", async ({ page }) => {
    await expect(
      page.locator("main").getByText("francisemil.cortez@gmail.com")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Send message", exact: true })
    ).toBeVisible();
  });

  test("submits directly, blocks duplicate sends, confirms success and resets", async ({
    page,
  }) => {
    let submissions = 0;
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    await page.route(endpoint, async (route) => {
      submissions++;
      const data = route.request().postDataJSON();
      expect(Boolean(data.access_key)).toBe(true);
      expect(data.message).toBe("A test message.");
      await gate;
      await route.fulfill({ status: 200, json: { success: true } });
    });
    const submit = page.getByRole("button", {
      name: "Send message",
      exact: true,
    });
    await expect(submit).toBeEnabled();
    await submit.click();
    expect(submissions).toBe(0);
    for (const [name, value] of Object.entries({
      Name: "Contact Test",
      Email: "test@example.com",
      Subject: "Test inquiry",
      Message: "A test message.",
    })) {
      await page.getByRole("textbox", { name, exact: true }).fill(value);
    }
    await submit.click();
    await expect(
      page.getByRole("button", { name: "Sending...", exact: true })
    ).toBeDisabled();
    await expect.poll(() => submissions).toBe(1);
    release();
    await expect(
      page.getByRole("alert").filter({
        has: page.getByRole("button", { name: "Dismiss notification" }),
      })
    ).toContainText("Message sent successfully!");
    await expect(
      page.getByRole("textbox", { name: "Message", exact: true })
    ).toHaveValue("");
    await expect(submit).toBeEnabled();
    expect(submissions).toBe(1);
  });

  for (const failure of ["rejection", "html", "network"]) {
    test(`preserves message and recovers after ${failure}`, async ({
      page,
    }) => {
      await page.route(endpoint, (route) =>
        failure === "network"
          ? route.abort("failed")
          : route.fulfill(
              failure === "html"
                ? {
                    status: 403,
                    contentType: "text/html",
                    body: "<html>Just a moment...</html>",
                  }
                : {
                    status: 400,
                    json: {
                      success: false,
                      message: "Please verify your email.",
                    },
                  }
            )
      );
      for (const [name, value] of Object.entries({
        Name: "Contact Test",
        Email: "test@example.com",
        Subject: "Test inquiry",
        Message: "Keep this message.",
      })) {
        await page.getByRole("textbox", { name, exact: true }).fill(value);
      }
      await page
        .getByRole("button", { name: "Send message", exact: true })
        .click();
      await expect(
        page.getByRole("alert").filter({
          has: page.getByRole("button", { name: "Dismiss notification" }),
        })
      ).toContainText(
        failure === "rejection"
          ? "Please verify your email."
          : failure === "html"
            ? "could not confirm your message"
            : "Could not reach the contact service"
      );
      await expect(
        page.getByRole("textbox", { name: "Message", exact: true })
      ).toHaveValue("Keep this message.");
      await expect(
        page.getByRole("button", { name: "Send message", exact: true })
      ).toBeEnabled();
    });
  }
});
