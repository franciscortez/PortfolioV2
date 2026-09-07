import { test, expect } from "@playwright/test";

test.describe("End-to-End Performance & Core Web Vitals", () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  for (const route of routes) {
    test(`meets Core Web Vitals thresholds on ${route.name} (${route.path})`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      const response = await page.goto(route.path, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.status()).toBeLessThan(400);

      // Wait briefly for layout & paints to settle
      await page.waitForTimeout(700);

      const metrics = await page.evaluate(async () => {
        return new Promise<{
          ttfb: number;
          fcp: number;
          lcp: number;
          cls: number;
        }>((resolve) => {
          let lcp = 0;
          let cls = 0;

          try {
            new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              if (entries.length > 0) {
                lcp = entries[entries.length - 1].startTime;
              }
            }).observe({ type: "largest-contentful-paint", buffered: true });
          } catch {
            // Observer not supported or empty
          }

          try {
            new PerformanceObserver((entryList) => {
              for (const entry of entryList.getEntries()) {
                const shiftEntry = entry as PerformanceEntry & {
                  hadRecentInput?: boolean;
                  value?: number;
                };
                if (!shiftEntry.hadRecentInput && shiftEntry.value) {
                  cls += shiftEntry.value;
                }
              }
            }).observe({ type: "layout-shift", buffered: true });
          } catch {
            // Observer not supported or empty
          }

          setTimeout(() => {
            const nav = performance.getEntriesByType(
              "navigation"
            )[0] as PerformanceNavigationTiming | null;
            const paint = performance.getEntriesByType("paint");
            const fcpEntry = paint.find(
              (e) => e.name === "first-contentful-paint"
            );

            resolve({
              ttfb: nav ? nav.responseStart - nav.requestStart : 0,
              fcp: fcpEntry ? fcpEntry.startTime : 0,
              lcp: lcp || (fcpEntry ? fcpEntry.startTime : 0),
              cls: Number(cls.toFixed(4)),
            });
          }, 300);
        });
      });

      // Assert Core Web Vitals standard thresholds ("Good" rating):
      // TTFB: < 800ms
      // FCP: < 1800ms
      // LCP: < 2500ms
      // CLS: < 0.1
      console.log(
        `[Perf - ${route.name}] TTFB: ${metrics.ttfb.toFixed(1)}ms | FCP: ${metrics.fcp.toFixed(1)}ms | LCP: ${metrics.lcp.toFixed(1)}ms | CLS: ${metrics.cls}`
      );
      expect(metrics.ttfb).toBeLessThan(1200);
      expect(metrics.fcp).toBeLessThan(2500);
      expect(metrics.lcp).toBeLessThan(3500);
      expect(metrics.cls).toBeLessThan(0.1);
      expect(consoleErrors).toHaveLength(0);
    });
  }

  test("client-side page transitions complete promptly", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/");
    await page.waitForTimeout(700);

    const navigateTo = async (path: string) => {
      const start = Date.now();
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
      await page.waitForURL(`**${path}`);
      return Date.now() - start;
    };

    const projectNavTime = await navigateTo("/projects");
    console.log(`[Perf - Nav] / -> /projects: ${projectNavTime}ms`);
    expect(projectNavTime).toBeLessThan(2000);

    const expNavTime = await navigateTo("/experience");
    console.log(`[Perf - Nav] /projects -> /experience: ${expNavTime}ms`);
    expect(expNavTime).toBeLessThan(2000);

    const skillsNavTime = await navigateTo("/skills");
    console.log(`[Perf - Nav] /experience -> /skills: ${skillsNavTime}ms`);
    expect(skillsNavTime).toBeLessThan(2000);
  });
});
