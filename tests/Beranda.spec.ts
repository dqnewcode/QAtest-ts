
import { LoginPage } from "../pages/login/LoginPage";
import { BerandaPage } from "../pages/Beranda/BerandaPage";
import { test } from "@playwright/test";
//import { GlobalUtils } from "../pages/global/globalUtils";

//dafausgd
test('test', async ({ page }) => {

  const loginPage = new LoginPage(page);  
  await loginPage.navigate();
  await loginPage.login('', '');

  const berandaPage = new BerandaPage(page);
  await berandaPage.BerandaFungsionality();
 
});