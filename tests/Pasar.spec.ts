import { test } from "@playwright/test";
import { LoginPage } from "../pages/login/LoginPage";
import { PasarPage } from "../pages/Pasar/PasarPage";



test('Verify that the "Favorite" menu should be empty if the "Love" button has not been clicked.', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
   const pasarPage =new PasarPage(page);
  await pasarPage.favoriteFungsional();
  await pasarPage.verifyLineFavoriteVisible();

})

test('Verify that the "Favorite" menu should be list of product', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
  const pasarPage =new PasarPage(page);
  await pasarPage.favoriteFungsionalNegative;
   

})

test('Verify if forex functionality works correctly', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
  const pasarPage =new PasarPage(page);
  await pasarPage.forexFungsional;
   

})

test('Verify if index functionality works correctly', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
  const pasarPage =new PasarPage(page);
  await pasarPage.IndexFungsional;
   

})

test('Verify if komoditi functionality works correctly', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
  const pasarPage =new PasarPage(page);
  await pasarPage.KomoditiFungsional;
   

})


