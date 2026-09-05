import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke tests", () => {
  test("homepage nav links are present", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: "Work", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Process", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Services", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "FAQ", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  });

  test("work section links navigate to case studies", async ({ page }) => {
    await page.goto("/#work");
    await page.getByRole("link", { name: /AI Studio/i }).click();
    await expect(page).toHaveURL(/\/work\/ai-studio/);
    await expect(page.getByRole("heading", { level: 1, name: "AI Studio" })).toBeVisible();

    await page.goto("/#work");
    await page.getByRole("link", { name: /Saudi Real Estate/i }).click();
    await expect(page).toHaveURL(/\/work\/saudi-real-estate/);

    await page.goto("/#work");
    await page.getByRole("link", { name: /Flowlens/i }).click();
    await expect(page).toHaveURL(/\/work\/flowlens/);
  });

  test("email CTA is present on homepage and contact section", async ({ page }) => {
    await page.goto("/");
    const heroCta = page.getByRole("link", { name: "Get in touch" });
    await expect(heroCta).toBeVisible();
    await expect(heroCta).toHaveAttribute("href", "mailto:hello@adhamabdelwahab.com");

    await page.goto("/#contact");
    const emailLink = page.getByRole("link", { name: "hello@adhamabdelwahab.com" });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", "mailto:hello@adhamabdelwahab.com");
  });

  test("404 page renders with home link", async ({ page }) => {
    await page.goto("/does-not-exist");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("doesn't exist");
    await expect(page.getByRole("link", { name: "Back to home" })).toBeVisible();
    await page.getByRole("link", { name: "Back to home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("reduced motion disables pulse animation", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const pulseDot = page.locator(".pulse-dot").first();
    await expect(pulseDot).toBeVisible();
    const animationName = await pulseDot.evaluate((el) =>
      getComputedStyle(el).animationName,
    );
    expect(animationName === "none" || animationName === "").toBeTruthy();
  });
});

test.describe("system color scheme", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("ledger-mode");
    });
  });

  test.describe("dark preference", () => {
    test.use({ colorScheme: "dark" });

    test("applies the dark theme class", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("html")).toHaveClass(/dark/);
    });
  });

  test.describe("light preference", () => {
    test.use({ colorScheme: "light" });

    test("does not apply the dark theme class", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("html")).not.toHaveClass(/dark/);
    });
  });

  test.describe("no preference", () => {
    test.use({ colorScheme: "no-preference" });

    test("falls back to light theme", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("html")).not.toHaveClass(/dark/);
    });
  });
});
