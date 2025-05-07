
const { test, expect } = require('@playwright/test');

test('Login Test - Valid Credentials', async ({ page }) => {
  await page.goto('http://example.com/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('http://example.com/dashboard');
});
