import { test, expect, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomPassword = faker.random.alphaNumeric(8);
const randomEmail = faker.internet.email();
const randomName = faker.internet.userName();
const randomStreet = faker.address.streetAddress();
const randomAddress = faker.address.city();
const postCode = faker.address.zipCode();

test.beforeEach(async ({ page }) => {
  await page.goto('https://naapurillisuus-48a5b.web.app/');
});

test('create account', async ({ page }) => {
  await page.locator('.btn').nth(1).click();
  await page.locator('.form-control input').nth(0).fill(randomName);
  await page.locator('.form-control  input').nth(1).press('Enter');
  await page.locator('.form-label label').nth(2).fill(randomName);
  await page.locator('.form-label label').nth(3).press('Enter');
  await page.locator('.form-label label').nth(4).fill(randomEmail);
  await page.locator('.form-label label').nth(5).press('Enter');
  await page.locator('.form-label label').nth(6).fill(randomPassword);
  await page.locator('.form-label label').nth(7).press('Enter');
  await page.locator('.form-label label').nth(8).fill(randomAddress);
  await page.locator('.form-label label').nth(9).press('Enter');
  await page.locator('.form-label label').nth(10).fill(randomStreet);
  await page.locator('.form-label label').nth(11).press('Enter');
  await page.locator('.form-label label').nth(12).fill(postCode);
  await page.locator('.form-label label').nth(13).press('Enter');
  await page.locator('.form-label label').nth(14).fill(randomPassword);
  await page.locator('.form-label label').nth(15).press('Enter');

  /*  await page.goto('https://naapurillisuus-48a5b.web.app/')
  await page.locator('.amplify-field label').nth(0).fill('vitaly.esipov@gmail.com');
  await page.locator('.amplify-field label').nth(0).press('Enter');
  await page.locator('.amplify-field label').nth(1).fill("#sPzt@wx%J3Bh5y$");
  await page.locator('.amplify-field label').nth(1).press('Enter');
  await page.goto('https://main.d2h09ft1pooas1.amplifyapp.com/backoffice/clients') */

  /*   await expect(page.locator('.p-column-title')).toHaveText([randomEmail]); */
});
