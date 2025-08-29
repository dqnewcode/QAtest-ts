import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';

test('User enters valid credentials and clicks login button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('', '');
 
});

test('User clicks "Forgot Password" and is redirected to the reset page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.LupaPWFungsional();
  await loginPage.verifyTextLupaPW();
  console.log('verifyTextLupaPW')
 
});


test('invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('antonio', 'diqy');
  await loginPage.getErrorMessage('')
});
