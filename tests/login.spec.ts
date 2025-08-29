import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';

test('User enters valid credentials and clicks login button', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
 
});

test('User clicks "Forgot Password" and is redirected to the reset page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.LupaPWFungsional();
  await loginPage.verifyTextLupaPW();
  console.log('verifyTextLupaPW')
 
});




// test('successful login by google', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//     await loginPage.navigate();
//     await loginPage.LoginByGoogle();
// });

test('invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('antonio', 'diqy');
  await loginPage.getErrorMessage('')
});
