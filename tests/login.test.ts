import { expect, test } from '@playwright/test';

test('Login page has text `Sign In` and `Sign Into Your Account`', async ({
  page
}) => {
  await page.goto('/login');

  await expect(page).toHaveTitle(/Welcome To DevConnector/);
  await expect(page.locator('h1.large.text-primary')).toHaveText(/Sign In/);
  await expect(page.locator('p.lead')).toHaveText(/Sign Into Your Account/);
});

test('Login page logs player in successfully', async ({ page }) => {
  await page.locator('input#email').fill('nishojib@gmail.com');
  await page.locator('input#password').fill('password');
  await page.locator('button#submit').click();
  await expect(page).toHaveURL(/.*dashboard/);
});
