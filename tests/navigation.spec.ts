import { test, expect } from "@playwright/test";

test.describe("18-28 Gençlik Derneği E2E Tests", () => {
  test("Homepage loads and displays main content", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    
    // Check title contains brand name
    await expect(page).toHaveTitle(/18-28 Gençlik Derneği/);
    
    // Check Hero heading is present
    const heroTitle = page.locator("h1");
    await expect(heroTitle).toContainText("18-28 Yaş Arası Gençler");
  });

  test("Navigation works correctly", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    
    // Click Hakkımızda nav link
    await page.click('a:has-text("Hakkımızda")');
    await expect(page).toHaveURL(/.*hakkimizda/);
    
    // Check that we transitioned and FAQ elements are present
    const faqsHeader = page.locator("h2:has-text('Sıkça Sorulan Sorular')");
    await expect(faqsHeader).toBeVisible();
  });

  test("Contact form validations display errors on empty submit", async ({ page }) => {
    await page.goto("http://localhost:3000/basvuru-ve-iletisim");
    
    // Attempt submitting without entering values
    await page.click('button[type="submit"]');
    
    // Check validation messages are shown
    const nameError = page.locator("p:has-text('Ad Soyad en az 2 karakter olmalıdır.')");
    await expect(nameError).toBeVisible();
    
    const emailError = page.locator("p:has-text('Geçerli bir e-posta adresi giriniz.')");
    await expect(emailError).toBeVisible();
  });
});
