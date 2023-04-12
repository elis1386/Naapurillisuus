import { test, expect, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomPassword = faker.random.alphaNumeric(8);
const randomEmail = faker.internet.email();
const randomName = faker.internet.userName();
const randomSurname = faker.name.lastName();
const randomStreet = faker.address.streetAddress();
const randomAddress = faker.address.city();
const postCode = faker.address.zipCode();

test.beforeEach(async ({ page }) => {
  await page.goto('https://naapurillisuus-48a5b.web.app/');
});

test('sign up as volunteer', async ({ page }) => {
  await page.locator('.btn').nth(1).click();
  await page.pause();
  await page.locator('[placeholder="Enter your first name"]').fill(randomName);
  await page
    .locator('[placeholder="Enter your last name"]')
    .fill(randomSurname);
  await page
    .locator('[placeholder="Enter your email name@example.com"]')
    .fill(randomEmail);
  await page
    .locator('[placeholder="Enter your password"]')
    .fill(randomPassword);
  await page
    .locator('[placeholder="Enter street name and building"]')
    .fill(randomAddress);
  await page
    .locator('[placeholder="Enter street name and building"]')
    .fill(randomStreet);

  await page.locator('select.form-select').selectOption('Espoo');
  await page.locator('[placeholder="Enter your zip-code"]').fill(postCode);
 
  await page.locator('input[type=checkbox]').getByText('Walking with pets');
  await page.getByRole('button', { name: 'Join us' }).click();

  await page.goto('https://naapurillisuus-48a5b.web.app/helper-dashboard');
});
