import { test } from "@playwright/test";
import { LoginPage } from "../pages/login/LoginPage";
import { OrderPage } from "../pages/Order/OrderPage";
import { GlobalUtils } from "../pages/global/GlobalUtils";



test('Ensure the open order see the product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12')
  //await utils.delay(2000)
const orderPage =new OrderPage(page);
 // await utils.delay(5000)
  await orderPage.OpenOrderfungsionalityopenorder();
  await orderPage.verifyLineOpenOrder();
  

});

test('Ensure the pending order see the product', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');

  const orderPage =new OrderPage(page);
  await orderPage.fungsionalityPendingOrder();
  await orderPage.verifyPendingOrder();
  
});
test('Ensure that the riwayat transaksi displayed', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mashshiddiqy0@gmail.com', 'Diqyanfield.12');
  const orderPage =new OrderPage(page);
  await orderPage.fungsionalitRiwayatTransaksi
  await orderPage.verifyLineRiwayatTransaksi
  
});


