import { test } from "@playwright/test";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { LoginPage } from '../pages/login/LoginPage';



test('Verify the "Buka Akun Demo" button functionality', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
 // await loginPage.login('', '');
  
  const landingPage = new LandingPage(page);
  await landingPage.akunDemoFungsional();
  await landingPage.verifyDemoTextBukaAkunMifxVisible();
  console.log ('verifyDemoTextBukaAkunMifxVisible')
});

test('Verify the "Buka Akun Live" button functionality', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  //await loginPage.login('', '');
  const landingPage = new LandingPage(page);
  await landingPage.akunLiveFungsional();
  await landingPage.akunLiveFungsional();
  console.log ('verifyTextBukaLive')
});

